'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CakeReservationForm } from '@/components/cake-reservation-form';

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--pantry-cream))]">
      {/* Header with Hero Image */}
      <header className="relative w-full h-[400px]">
        <Image
          src="/generated/hero-cafe-exterior.png"
          alt="The Pantry Café - Custom Cakes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-10 max-w-2xl bg-black/50 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Custom Cake Orders</h1>
          <p className="text-lg md:text-xl text-white/90">
            Make your special occasion unforgettable with a custom cake from The Pantry Café
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[hsl(var(--pantry-navy))] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-8 py-4">
            <Link
              href="/#home"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#menu"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className="text-[hsl(var(--pantry-orange))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors border-b-2 border-[hsl(var(--pantry-orange))]"
            >
              Cake Orders
            </Link>
            <Link
              href="/#gallery"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/#about"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--pantry-navy))]">
            Order Your Perfect Cake
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[hsl(var(--foreground))]">
            Whether it's a birthday, wedding, anniversary, or any special celebration, we create
            beautiful custom cakes made fresh with the finest ingredients. Each cake is baked to
            order with care and attention to detail.
          </p>
        </div>

        {/* Why Order From Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--pantry-orange))] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">
              Fresh & Quality
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Every cake is baked fresh to order using premium, locally-sourced ingredients
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--pantry-orange))] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">
              Custom Designs
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Personalized designs tailored to your vision and celebration theme
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--pantry-orange))] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">
              Flexible Options
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Choose pickup at our café or delivery within Aliwal North
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <CakeReservationForm />
      </section>

      {/* Information Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[hsl(var(--pantry-navy))]">
            How It Works
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--pantry-orange))] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Submit Your Request</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Fill out the form above with your cake details, preferences, and event date.
                  Please submit your request at least 48 hours before your pickup/delivery date.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--pantry-orange))] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">We'll Contact You</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Our team will reach out within 24 hours to discuss your design, confirm pricing,
                  and arrange payment details. A deposit may be required for large orders.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--pantry-orange))] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">We Bake Your Cake</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Your custom cake will be freshly baked and beautifully decorated according to
                  your specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--pantry-orange))] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Pickup or Delivery</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Collect your cake at our café or have it delivered to your location in Aliwal
                  North on your chosen date and time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[hsl(var(--pantry-cream))] rounded-lg border-l-4 border-[hsl(var(--pantry-orange))]">
            <h3 className="text-lg font-bold mb-2 text-[hsl(var(--pantry-navy))]">
              Important Notes:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Minimum 48 hours advance notice required for all cake orders</li>
              <li>Final price may vary based on design complexity and custom requests</li>
              <li>Delivery available within Aliwal North (additional charges may apply)</li>
              <li>Please inform us of any dietary requirements or allergies</li>
              <li>
                For urgent orders or questions, call us at{' '}
                <a
                  href="tel:+27516334999"
                  className="text-[hsl(var(--pantry-orange))] hover:underline font-bold"
                >
                  +27 51 633 4999
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--pantry-navy))] text-[hsl(var(--pantry-cream))] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">
            © 2025 The Pantry Café – Aliwal North | All Rights Reserved
          </p>
          <p className="mt-2 text-sm text-[hsl(var(--pantry-cream))]/70">
            73 Somerset Street, Aliwal North, Eastern Cape, 9750 | +27 51 633 4999
          </p>
        </div>
      </footer>
    </div>
  );
}
