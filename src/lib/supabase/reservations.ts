import { supabase } from './client';

export type CakeType = 'birthday' | 'wedding' | 'anniversary' | 'celebration' | 'custom';
export type CakeSize = 'small_6inch' | 'medium_8inch' | 'large_10inch' | 'xlarge_12inch' | 'sheet_cake';
export type OrderType = 'pickup' | 'delivery';
export type ReservationStatus = 'pending' | 'confirmed' | 'in_progress' | 'ready' | 'completed' | 'cancelled';

export interface CakeReservation {
  id: string;
  tenantid: string;
  projectid: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  cake_type: CakeType;
  cake_flavor: string;
  cake_size: CakeSize;
  servings: number | null;
  custom_message: string | null;
  special_requests: string | null;
  design_description: string | null;
  order_type: OrderType;
  delivery_address: string | null;
  pickup_date: string;
  pickup_time: string;
  estimated_price: number | null;
  deposit_paid: boolean;
  status: ReservationStatus;
  created_at: string;
  updated_at: string;
  confirmed_at: string | null;
  cancelled_at: string | null;
  notes: string | null;
}

export interface CreateReservationInput {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  cake_type: CakeType;
  cake_flavor: string;
  cake_size: CakeSize;
  servings?: number;
  custom_message?: string;
  special_requests?: string;
  design_description?: string;
  order_type: OrderType;
  delivery_address?: string;
  pickup_date: string;
  pickup_time: string;
}

// Create a new cake reservation
export async function createReservation(input: CreateReservationInput): Promise<CakeReservation> {
  const { data, error } = await supabase
    .from('cake_reservations')
    .insert({
      tenantid: '8YJvYBJem0Z5wVU0kusSfHg44FI2',
      projectid: '7c0557bf-c2f8-4755-ad9e-202fdb699618',
      ...input,
    })
    .select()
    .single();

  if (error) throw error;
  return data as CakeReservation;
}

// Get all reservations
export async function getReservations(): Promise<CakeReservation[]> {
  const { data, error } = await supabase
    .from('cake_reservations')
    .select('*')
    .order('pickup_date', { ascending: true });

  if (error) throw error;
  return data as CakeReservation[];
}

// Get a single reservation by ID
export async function getReservation(id: string): Promise<CakeReservation | null> {
  const { data, error } = await supabase
    .from('cake_reservations')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw error;
  }
  return data as CakeReservation;
}

// Get reservations by email
export async function getReservationsByEmail(email: string): Promise<CakeReservation[]> {
  const { data, error } = await supabase
    .from('cake_reservations')
    .select('*')
    .eq('customer_email', email)
    .order('pickup_date', { ascending: true });

  if (error) throw error;
  return data as CakeReservation[];
}

// Update reservation status
export async function updateReservationStatus(
  id: string,
  status: ReservationStatus
): Promise<CakeReservation> {
  const updates: any = {
    status,
    updated_at: new Date().toISOString(),
  };

  if (status === 'confirmed') {
    updates.confirmed_at = new Date().toISOString();
  } else if (status === 'cancelled') {
    updates.cancelled_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('cake_reservations')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as CakeReservation;
}

// Delete a reservation
export async function deleteReservation(id: string): Promise<void> {
  const { error } = await supabase.from('cake_reservations').delete().eq('id', id);

  if (error) throw error;
}

// Helper function to calculate estimated price based on size and type
export function calculateEstimatedPrice(size: CakeSize, type: CakeType): number {
  const basePrices: Record<CakeSize, number> = {
    small_6inch: 250,
    medium_8inch: 350,
    large_10inch: 500,
    xlarge_12inch: 700,
    sheet_cake: 600,
  };

  const typeMultipliers: Record<CakeType, number> = {
    birthday: 1.0,
    celebration: 1.1,
    anniversary: 1.2,
    wedding: 1.5,
    custom: 1.3,
  };

  return basePrices[size] * typeMultipliers[type];
}

// Helper function to get serving size from cake size
export function getServingSizeForCake(size: CakeSize): number {
  const servings: Record<CakeSize, number> = {
    small_6inch: 8,
    medium_8inch: 12,
    large_10inch: 20,
    xlarge_12inch: 30,
    sheet_cake: 40,
  };

  return servings[size];
}
