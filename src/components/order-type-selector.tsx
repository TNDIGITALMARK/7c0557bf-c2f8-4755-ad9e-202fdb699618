'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export type OrderType = 'delivery' | 'pickup'

interface OrderTypeSelectorProps {
  value: OrderType
  onChange: (value: OrderType) => void
}

export function OrderTypeSelector({ value, onChange }: OrderTypeSelectorProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-[hsl(var(--border))]">
      <h3 className="text-xl font-bold mb-4 text-[hsl(var(--pantry-navy))]">Order Type</h3>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--pantry-orange))] transition-colors cursor-pointer has-[:checked]:border-[hsl(var(--pantry-orange))] has-[:checked]:bg-[hsl(var(--pantry-cream))]">
          <RadioGroupItem value="delivery" id="delivery" />
          <Label
            htmlFor="delivery"
            className="flex-1 cursor-pointer font-bold text-base"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-[hsl(var(--pantry-orange))]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <div className="font-bold">Delivery</div>
                <div className="text-sm font-normal text-[hsl(var(--muted-foreground))]">
                  Get your order delivered to your door
                </div>
              </div>
            </div>
          </Label>
        </div>

        <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--pantry-orange))] transition-colors cursor-pointer has-[:checked]:border-[hsl(var(--pantry-orange))] has-[:checked]:bg-[hsl(var(--pantry-cream))]">
          <RadioGroupItem value="pickup" id="pickup" />
          <Label
            htmlFor="pickup"
            className="flex-1 cursor-pointer font-bold text-base"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-[hsl(var(--pantry-orange))]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>
                <div className="font-bold">Pickup</div>
                <div className="text-sm font-normal text-[hsl(var(--muted-foreground))]">
                  Pick up your order at our location
                </div>
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>

      {value === 'delivery' && (
        <div className="mt-4 p-4 bg-[hsl(var(--pantry-cream))] rounded-lg border border-[hsl(var(--border))]">
          <p className="text-sm text-[hsl(var(--pantry-navy))]">
            <strong>Delivery Area:</strong> Available in Aliwal North and surrounding areas.
            Delivery fee applies based on distance.
          </p>
        </div>
      )}

      {value === 'pickup' && (
        <div className="mt-4 p-4 bg-[hsl(var(--pantry-cream))] rounded-lg border border-[hsl(var(--border))]">
          <p className="text-sm text-[hsl(var(--pantry-navy))]">
            <strong>Pickup Location:</strong> 73 Somerset Street, Aliwal North, Eastern Cape, 9750
          </p>
          <p className="text-sm text-[hsl(var(--pantry-navy))] mt-2">
            <strong>Pickup Hours:</strong> Mon-Fri: 7:00 AM - 5:00 PM | Sat: 8:00 AM - 3:00 PM
          </p>
        </div>
      )}
    </div>
  )
}
