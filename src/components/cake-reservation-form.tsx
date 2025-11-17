'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import {
  createReservation,
  calculateEstimatedPrice,
  getServingSizeForCake,
  type CakeType,
  type CakeSize,
  type OrderType,
} from '@/lib/supabase/reservations';

const reservationSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Invalid email address'),
  customer_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  cake_type: z.enum(['birthday', 'wedding', 'anniversary', 'celebration', 'custom']),
  cake_flavor: z.string().min(1, 'Please select a flavor'),
  cake_size: z.enum(['small_6inch', 'medium_8inch', 'large_10inch', 'xlarge_12inch', 'sheet_cake']),
  custom_message: z.string().optional(),
  special_requests: z.string().optional(),
  design_description: z.string().optional(),
  order_type: z.enum(['pickup', 'delivery']),
  delivery_address: z.string().optional(),
  pickup_date: z.date({
    required_error: 'Please select a pickup date',
  }),
  pickup_time: z.string().min(1, 'Please select a pickup time'),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const cakeTypes: { value: CakeType; label: string }[] = [
  { value: 'birthday', label: 'Birthday Cake' },
  { value: 'wedding', label: 'Wedding Cake' },
  { value: 'anniversary', label: 'Anniversary Cake' },
  { value: 'celebration', label: 'Celebration Cake' },
  { value: 'custom', label: 'Custom Cake' },
];

const cakeSizes: { value: CakeSize; label: string; servings: number }[] = [
  { value: 'small_6inch', label: 'Small (6 inch)', servings: 8 },
  { value: 'medium_8inch', label: 'Medium (8 inch)', servings: 12 },
  { value: 'large_10inch', label: 'Large (10 inch)', servings: 20 },
  { value: 'xlarge_12inch', label: 'Extra Large (12 inch)', servings: 30 },
  { value: 'sheet_cake', label: 'Sheet Cake', servings: 40 },
];

const cakeFlavors = [
  'Vanilla',
  'Chocolate',
  'Red Velvet',
  'Carrot Cake',
  'Lemon',
  'Strawberry',
  'Black Forest',
  'Mocha',
  'Butterscotch',
  'Custom Flavor',
];

const pickupTimes = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

export function CakeReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSize, setSelectedSize] = useState<CakeSize>('medium_8inch');
  const [selectedType, setSelectedType] = useState<CakeType>('birthday');
  const [estimatedPrice, setEstimatedPrice] = useState(
    calculateEstimatedPrice('medium_8inch', 'birthday')
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      cake_size: 'medium_8inch',
      cake_type: 'birthday',
      order_type: 'pickup',
    },
  });

  const orderType = watch('order_type');
  const pickupDate = watch('pickup_date');

  const updateEstimatedPrice = (size: CakeSize, type: CakeType) => {
    setSelectedSize(size);
    setSelectedType(type);
    setEstimatedPrice(calculateEstimatedPrice(size, type));
  };

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);

    try {
      const servings = getServingSizeForCake(data.cake_size);

      await createReservation({
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        customer_phone: data.customer_phone,
        cake_type: data.cake_type,
        cake_flavor: data.cake_flavor,
        cake_size: data.cake_size,
        servings,
        custom_message: data.custom_message,
        special_requests: data.special_requests,
        design_description: data.design_description,
        order_type: data.order_type,
        delivery_address: data.order_type === 'delivery' ? data.delivery_address : undefined,
        pickup_date: format(data.pickup_date, 'yyyy-MM-dd'),
        pickup_time: data.pickup_time,
      });

      toast.success('Reservation Submitted!', {
        description: 'We will contact you shortly to confirm your cake order.',
      });

      reset();
    } catch (error) {
      console.error('Reservation error:', error);
      toast.error('Failed to Submit Reservation', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-[hsl(var(--pantry-navy))] text-[hsl(var(--pantry-cream))]">
        <CardTitle className="text-2xl">Request a Custom Cake</CardTitle>
        <CardDescription className="text-[hsl(var(--pantry-cream))]/80">
          Fill out the form below to request a custom cake for your special occasion
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[hsl(var(--pantry-navy))]">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_name">Full Name *</Label>
                <Input
                  id="customer_name"
                  {...register('customer_name')}
                  placeholder="John Doe"
                  className="mt-1"
                />
                {errors.customer_name && (
                  <p className="text-sm text-red-600 mt-1">{errors.customer_name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="customer_phone">Phone Number *</Label>
                <Input
                  id="customer_phone"
                  {...register('customer_phone')}
                  placeholder="+27 51 633 4999"
                  className="mt-1"
                />
                {errors.customer_phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.customer_phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="customer_email">Email Address *</Label>
              <Input
                id="customer_email"
                type="email"
                {...register('customer_email')}
                placeholder="john@example.com"
                className="mt-1"
              />
              {errors.customer_email && (
                <p className="text-sm text-red-600 mt-1">{errors.customer_email.message}</p>
              )}
            </div>
          </div>

          {/* Cake Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[hsl(var(--pantry-navy))]">Cake Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cake_type">Cake Type *</Label>
                <Select
                  value={watch('cake_type')}
                  onValueChange={(value: CakeType) => {
                    setValue('cake_type', value);
                    updateEstimatedPrice(selectedSize, value);
                  }}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select cake type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cakeTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.cake_type && (
                  <p className="text-sm text-red-600 mt-1">{errors.cake_type.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="cake_flavor">Flavor *</Label>
                <Select
                  value={watch('cake_flavor')}
                  onValueChange={(value) => setValue('cake_flavor', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select flavor" />
                  </SelectTrigger>
                  <SelectContent>
                    {cakeFlavors.map((flavor) => (
                      <SelectItem key={flavor} value={flavor}>
                        {flavor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.cake_flavor && (
                  <p className="text-sm text-red-600 mt-1">{errors.cake_flavor.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label>Size & Servings *</Label>
              <RadioGroup
                value={watch('cake_size')}
                onValueChange={(value: CakeSize) => {
                  setValue('cake_size', value);
                  updateEstimatedPrice(value, selectedType);
                }}
                className="mt-2 space-y-2"
              >
                {cakeSizes.map((size) => (
                  <div key={size.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={size.value} id={size.value} />
                    <Label htmlFor={size.value} className="font-normal cursor-pointer">
                      {size.label} - Serves {size.servings}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.cake_size && (
                <p className="text-sm text-red-600 mt-1">{errors.cake_size.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="custom_message">Message on Cake (Optional)</Label>
              <Input
                id="custom_message"
                {...register('custom_message')}
                placeholder="Happy Birthday Sarah!"
                className="mt-1"
                maxLength={50}
              />
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                Maximum 50 characters
              </p>
            </div>

            <div>
              <Label htmlFor="design_description">Design Description (Optional)</Label>
              <Textarea
                id="design_description"
                {...register('design_description')}
                placeholder="Describe your desired cake design, colors, theme, etc."
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="special_requests">Special Requests (Optional)</Label>
              <Textarea
                id="special_requests"
                {...register('special_requests')}
                placeholder="Dietary requirements, allergies, or other special requests"
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[hsl(var(--pantry-navy))]">Order Details</h3>

            <div>
              <Label>Order Type *</Label>
              <RadioGroup
                value={watch('order_type')}
                onValueChange={(value: OrderType) => setValue('order_type', value)}
                className="mt-2 flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup" className="font-normal cursor-pointer">
                    Pickup at Café
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery" className="font-normal cursor-pointer">
                    Delivery
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {orderType === 'delivery' && (
              <div>
                <Label htmlFor="delivery_address">Delivery Address *</Label>
                <Textarea
                  id="delivery_address"
                  {...register('delivery_address')}
                  placeholder="Full delivery address in Aliwal North"
                  className="mt-1"
                  rows={2}
                />
                {errors.delivery_address && (
                  <p className="text-sm text-red-600 mt-1">{errors.delivery_address.message}</p>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>{orderType === 'delivery' ? 'Delivery Date *' : 'Pickup Date *'}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal mt-1"
                    >
                      {pickupDate ? format(pickupDate, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={(date) => date && setValue('pickup_date', date)}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.pickup_date && (
                  <p className="text-sm text-red-600 mt-1">{errors.pickup_date.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="pickup_time">
                  {orderType === 'delivery' ? 'Delivery Time *' : 'Pickup Time *'}
                </Label>
                <Select
                  value={watch('pickup_time')}
                  onValueChange={(value) => setValue('pickup_time', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {pickupTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.pickup_time && (
                  <p className="text-sm text-red-600 mt-1">{errors.pickup_time.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Price Estimate */}
          <div className="bg-[hsl(var(--pantry-cream))] p-4 rounded-lg border-2 border-[hsl(var(--pantry-orange))]">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[hsl(var(--pantry-navy))]">
                Estimated Price:
              </span>
              <span className="text-2xl font-bold text-[hsl(var(--pantry-orange))]">
                R{estimatedPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2">
              Final price may vary based on design complexity. We'll confirm the exact price when
              we contact you.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[hsl(var(--pantry-orange))] hover:bg-[hsl(var(--pantry-navy))] text-white font-bold py-3 text-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Cake Request'}
          </Button>

          <p className="text-sm text-center text-[hsl(var(--muted-foreground))]">
            * Required fields. We'll contact you within 24 hours to confirm your order.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
