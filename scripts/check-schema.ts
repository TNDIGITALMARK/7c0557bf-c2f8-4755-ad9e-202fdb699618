import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IjhZSnZZQkplbTBaNXdWVTBrdXNTZkhnNDRGSTIiLCJwcm9qZWN0X2lkIjoiN2MwNTU3YmYtYzJmOC00NzU1LWFkOWUtMjAyZmRiNjk5NjE4IiwianRpIjoiNTdlMTU1ZmItYTMyMS00ZTJiLWIzOWMtMzRlOTVhODgzNDgwIiwiaWF0IjoxNjM0MTA5NTEsImV4cCI6MTc2MzQxMzY1MX0.7fZHIewXOdoDpk3dDfCU3ZSTvTXMU44vN-LcTgzfinU`
      }
    }
  }
);

async function checkSchema() {
  console.log('=== CHECKING FOR EXISTING TABLES ===\n');

  // Check for existing reservation-related tables
  const tablesToCheck = ['reservations', 'bookings', 'orders', 'cake_orders', 'custom_orders', 'menu_items'];

  for (const tableName of tablesToCheck) {
    const { error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });

    if (!error) {
      console.log(`✅ ${tableName} exists: ${count} rows`);
    } else {
      console.log(`❌ ${tableName} does not exist`);
    }
  }
}

checkSchema().catch(console.error);
