import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IjhZSnZZQkplbTBaNXdWVTBrdXNTZkhnNDRGSTIiLCJwcm9qZWN0X2lkIjoiN2MwNTU3YmYtYzJmOC00NzU1LWFkOWUtMjAyZmRiNjk5NjE4IiwianRpIjoiNTdlMTU1ZmItYTMyMS00ZTJiLWIzOWMtMzRlOTVhODgzNDgwIiwiaWF0IjoxNzYzNDEwOTUxLCJleHAiOjE3NjM0MTM2NTF9.7fZHIewXOdoDpk3dDfCU3ZSTvTXMU44vN-LcTgzfinU`
      }
    }
  }
);

async function applyMigration() {
  console.log('Applying cake_reservations migration...\n');

  const sql = `
-- Create cake_reservations table with required columns
create table if not exists public.cake_reservations (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Customer Information
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,

  -- Cake Details
  cake_type text not null check (cake_type in (
    'birthday', 'wedding', 'anniversary', 'celebration',
    'custom'
  )),
  cake_flavor text not null,
  cake_size text not null check (cake_size in (
    'small_6inch', 'medium_8inch', 'large_10inch',
    'xlarge_12inch', 'sheet_cake'
  )),
  servings integer,

  -- Customization
  custom_message text,
  special_requests text,
  design_description text,

  -- Order Details
  order_type text not null check (order_type in ('pickup', 'delivery')),
  delivery_address text,
  pickup_date timestamptz not null,
  pickup_time text not null,

  -- Pricing
  estimated_price numeric(10, 2),
  deposit_paid boolean default false,

  -- Status
  status text default 'pending' check (status in (
    'pending', 'confirmed', 'in_progress', 'ready',
    'completed', 'cancelled'
  )),

  -- Metadata
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  confirmed_at timestamptz,
  cancelled_at timestamptz,
  notes text
);

-- Add foreign key constraints (required)
alter table public.cake_reservations
  add constraint fk_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.cake_reservations
  add constraint fk_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable RLS (required)
alter table public.cake_reservations enable row level security;

-- RLS Policies (required - separate per operation)
create policy "anon_select_cake_reservations"
  on public.cake_reservations for select to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_cake_reservations"
  on public.cake_reservations for select to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_insert_cake_reservations"
  on public.cake_reservations for insert to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_update_cake_reservations"
  on public.cake_reservations for update to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_delete_cake_reservations"
  on public.cake_reservations for delete to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Add indexes for performance
create index if not exists idx_cake_reservations_tenant_project
  on public.cake_reservations(tenantid, projectid);
create index if not exists idx_cake_reservations_status
  on public.cake_reservations(status);
create index if not exists idx_cake_reservations_pickup_date
  on public.cake_reservations(pickup_date) where pickup_date is not null;
create index if not exists idx_cake_reservations_customer_email
  on public.cake_reservations(customer_email);

-- Add helpful comments
comment on table public.cake_reservations is 'Customer cake orders and reservations with tenant/project isolation';
comment on column public.cake_reservations.tenantid is 'FK to tenants.id for multi-tenant isolation';
comment on column public.cake_reservations.projectid is 'FK to projects.id for project-level isolation';
comment on column public.cake_reservations.cake_type is 'Type of cake: birthday, wedding, anniversary, celebration, custom';
comment on column public.cake_reservations.cake_size is 'Size: small (6 inch), medium (8 inch), large (10 inch), xlarge (12 inch), sheet cake';
comment on column public.cake_reservations.order_type is 'Pickup or delivery';
comment on column public.cake_reservations.status is 'Order status: pending, confirmed, in_progress, ready, completed, cancelled';
`;

  try {
    const { error } = await supabase.rpc('exec_sql', { sql_query: sql });

    if (error) {
      console.error('❌ Migration failed:', error);
    } else {
      console.log('✅ Migration applied successfully!');

      // Verify table was created
      const { count, error: checkError } = await supabase
        .from('cake_reservations')
        .select('*', { count: 'exact', head: true });

      if (!checkError) {
        console.log(`✅ Table verified: cake_reservations (${count} rows)`);
      }
    }
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

applyMigration().catch(console.error);
