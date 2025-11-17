'use client'

export const dynamic = 'force-dynamic'

import Image from 'next/image'
import { useState, useMemo } from 'react'
import { OrderTypeSelector, type OrderType } from '@/components/order-type-selector'
import { MenuCategorySelector } from '@/components/menu-category-selector'
import { menuItems, type MenuCategory } from '@/lib/menu-data'
import { Instagram, Facebook, Phone, MapPin, Clock, Star } from 'lucide-react'
import { MobileMenu } from '@/components/mobile-menu'

export default function PantryCafePage() {
  const [orderType, setOrderType] = useState<OrderType>('pickup')
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all')

  const filteredMenuItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return menuItems
    }
    return menuItems.filter(item => item.category === selectedCategory)
  }, [selectedCategory])

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: 'The best coffee in Aliwal North! The atmosphere is cozy and the staff is incredibly friendly.',
      image: '/generated/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'John D.',
      rating: 5,
      text: 'Amazing breakfast platters! Everything is fresh and delicious. Highly recommend the pancakes.',
      image: '/generated/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'Linda K.',
      rating: 5,
      text: 'A hidden gem in the heart of Aliwal North. Perfect spot for lunch with friends or family.',
      image: '/generated/avatar-3.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Header with Hero Image */}
      <header className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/generated/cafe-exterior-real.jpg"
          alt="The Pantry Café - Aliwal North Front"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
              The Pantry Café
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg">
              Where Every Bite Tells a Story
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#menu"
                className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-8 py-3 rounded-lg hover:bg-[hsl(var(--pantry-orange))]/90 transition-all shadow-xl hover:scale-105"
              >
                View Menu
              </a>
              <a
                href="/reservations"
                className="inline-block bg-white text-[hsl(var(--pantry-navy))] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
              >
                Order Custom Cake
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation - Desktop Only */}
      <nav className="hidden md:block bg-[hsl(var(--pantry-navy))] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-8 py-4">
            <a
              href="#home"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Menu
            </a>
            <a
              href="/reservations"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Cake Orders
            </a>
            <a
              href="#gallery"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#reviews"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section id="home" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--pantry-orange))] text-4xl md:text-5xl font-bold mb-6">
            Taste the Heart of Eastern Cape
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience authentic Eastern Cape flavours made from fresh, locally-sourced ingredients.
            From delicious pastries to hearty meals, The Pantry Café is a family-friendly spot for
            breakfast, lunch, or coffee with friends.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[hsl(var(--pantry-orange))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[hsl(var(--pantry-orange))]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fresh Daily</h3>
            <p className="text-base">
              Everything baked fresh every morning using traditional recipes and premium ingredients.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[hsl(var(--pantry-orange))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[hsl(var(--pantry-orange))]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Local Ingredients</h3>
            <p className="text-base">
              We source from local farmers and producers to bring you the freshest Eastern Cape flavours.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[hsl(var(--pantry-orange))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[hsl(var(--pantry-orange))]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Family Friendly</h3>
            <p className="text-base">
              A warm, welcoming atmosphere where families, friends, and neighbors come together.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-center text-lg text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            Discover our delicious selection of breakfast, lunch, dinner, and desserts
          </p>

          {/* Order Type Selector */}
          <div className="max-w-2xl mx-auto mb-8">
            <OrderTypeSelector value={orderType} onChange={setOrderType} />
          </div>

          {/* Menu Category Selector */}
          <MenuCategorySelector value={selectedCategory} onChange={setSelectedCategory} />

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                <p className="text-base mb-4 text-[hsl(var(--muted-foreground))]">{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[hsl(var(--pantry-orange))] font-bold text-xl">
                    R{item.price.toFixed(2)}
                  </p>
                  <button className="bg-[hsl(var(--pantry-navy))] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[hsl(var(--pantry-orange))] transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMenuItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[hsl(var(--muted-foreground))]">
                No items found in this category.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <div className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-8 py-3 rounded-full text-lg mb-6">
              {orderType === 'delivery' ? '🚚 Delivery Available' : '🛍️ Pickup Available'}
            </div>
            <p className="text-base text-[hsl(var(--muted-foreground))]">
              {orderType === 'delivery'
                ? 'Fast delivery to your location in Aliwal North'
                : 'Ready for pickup within 30 minutes'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - Instagram Style */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="text-center text-lg text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            A glimpse into our delicious creations and cozy atmosphere
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <Image
                src="/generated/gallery-cappuccino.jpg"
                alt="Beautiful latte art at The Pantry"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">Artisan Coffee</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <Image
                src="/generated/gallery-fresh-salad.jpg"
                alt="Fresh garden salad"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">Fresh Salads</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <Image
                src="/generated/gallery-pancake-stack.jpg"
                alt="Delicious pancake stack"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">Breakfast Delights</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <Image
                src="/generated/gallery-pastries.jpg"
                alt="Fresh baked pastries and goods"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">Baked Goods</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <Image
                src="/generated/gallery-breakfast-plate.jpg"
                alt="Gourmet breakfast plate"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">Breakfast Platters</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <Image
                src="/generated/gallery-interior.jpg"
                alt="Cozy café interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">Our Space</p>
              </div>
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/pantry_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all shadow-lg"
            >
              <Instagram className="w-6 h-6" />
              Follow Us on Instagram
            </a>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
              @pantry_cafe - See more daily updates and specials
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-center text-lg text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[hsl(var(--pantry-cream))] rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[hsl(var(--pantry-orange))] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[hsl(var(--pantry-orange))] text-[hsl(var(--pantry-orange))]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Pantry+Café+Aliwal+North"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[hsl(var(--pantry-navy))] text-white font-bold px-8 py-3 rounded-lg hover:bg-[hsl(var(--pantry-orange))] transition-colors shadow-md"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-12 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About The Pantry Café</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                The Pantry Café is committed to bringing a warm, family-friendly atmosphere with the best
                of Eastern Cape flavours. Our passion lies in creating memorable dining experiences using
                fresh, locally-sourced ingredients that celebrate the rich culinary heritage of our region.
              </p>
              <p>
                Whether you're here for breakfast, a coffee break, or a celebratory meal, our dedicated
                team ensures you feel at home. We take pride in our handcrafted dishes, artisan coffee,
                and freshly baked goods made daily with love and care.
              </p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-center text-xl">
                Visit us at 73 Somerset Street, Aliwal North - where every meal is made with heart!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">Contact & Location</h2>
          <p className="text-center text-lg text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            Visit us or get in touch - we'd love to serve you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--pantry-orange))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[hsl(var(--pantry-orange))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Address</h3>
                  <p className="text-lg">73 Somerset Street, Aliwal North, Eastern Cape, 9750</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--pantry-orange))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[hsl(var(--pantry-orange))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Phone</h3>
                  <p className="text-lg">
                    <a href="tel:+27516334999" className="hover:underline hover:text-[hsl(var(--pantry-orange))]">
                      +27 51 633 4999
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--pantry-orange))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[hsl(var(--pantry-orange))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Hours</h3>
                  <div className="text-lg space-y-1">
                    <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 3:00 PM</p>
                    <p className="text-[hsl(var(--muted-foreground))]">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--pantry-navy))]">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/pantry_cafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all shadow-md"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/thepantrybakerycafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all shadow-md"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg h-[500px] flex items-center justify-center shadow-lg overflow-hidden">
              <div className="text-center p-8">
                <svg
                  className="w-20 h-20 mx-auto mb-6 text-[hsl(var(--pantry-navy))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Find Us in Aliwal North</h3>
                <p className="text-lg mb-6">73 Somerset Street, Eastern Cape</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Pantry+Café+Aliwal+North"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-8 py-3 rounded-lg hover:bg-[hsl(var(--pantry-navy))] transition-colors shadow-md"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--pantry-navy))] text-[hsl(var(--pantry-cream))] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Pantry Café</h3>
              <p className="text-[hsl(var(--pantry-cream))]/80">
                Authentic Eastern Cape flavours in the heart of Aliwal North
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="#menu" className="block hover:text-[hsl(var(--pantry-orange))] transition-colors">Menu</a>
                <a href="/reservations" className="block hover:text-[hsl(var(--pantry-orange))] transition-colors">Cake Orders</a>
                <a href="#gallery" className="block hover:text-[hsl(var(--pantry-orange))] transition-colors">Gallery</a>
                <a href="#contact" className="block hover:text-[hsl(var(--pantry-orange))] transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Connect With Us</h4>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/pantry_cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[hsl(var(--pantry-orange))] transition-colors"
                >
                  Instagram: @pantry_cafe
                </a>
                <a
                  href="https://www.facebook.com/thepantrybakerycafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[hsl(var(--pantry-orange))] transition-colors"
                >
                  Facebook: The Pantry Bakery Cafe
                </a>
                <a
                  href="tel:+27516334999"
                  className="block hover:text-[hsl(var(--pantry-orange))] transition-colors"
                >
                  Phone: +27 51 633 4999
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[hsl(var(--pantry-cream))]/20 pt-8 text-center">
            <p className="text-[hsl(var(--pantry-cream))]/80">
              © 2025 The Pantry Café – Aliwal North | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
