export const dynamic = 'force-dynamic'

import Image from 'next/image'

export default function PantryCafePage() {
  return (
    <div className="min-h-screen">
      {/* Header with Hero Image */}
      <header className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/generated/hero-cafe-exterior.png"
          alt="The Pantry Café - Aliwal North Front"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-10 max-w-2xl bg-black/50 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">The Pantry Café</h1>
          <p className="text-lg md:text-xl text-white/90">
            73 Somerset Street, Aliwal North, Eastern Cape, 9750
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[hsl(var(--pantry-navy))] sticky top-0 z-50 shadow-md">
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
              href="#gallery"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-[hsl(var(--pantry-cream))] font-bold px-3 py-2 hover:text-[hsl(var(--pantry-orange))] transition-colors"
            >
              About
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

      {/* Home Section */}
      <section id="home" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[hsl(var(--pantry-orange))] text-3xl md:text-4xl font-bold mb-4">
            Taste the Heart of Eastern Cape
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Experience authentic Eastern Cape flavours made from fresh, locally-sourced ingredients.
            From delicious pastries to hearty meals, The Pantry Café is a family-friendly spot for
            breakfast, lunch, or coffee with friends.
          </p>
        </div>

        <div className="text-center">
          <a
            href="#menu"
            className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-8 py-3 rounded-lg hover:bg-[hsl(var(--pantry-navy))] transition-colors shadow-md"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Menu</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Card 1 */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Chicken & Mushroom Pie</h3>
              <p className="text-base mb-4">Rich, creamy filling in a buttery pastry crust.</p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-lg">R45.00</p>
            </div>

            {/* Menu Card 2 */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Breakfast Platter</h3>
              <p className="text-base mb-4">Eggs, bacon, sausage, and fresh bread with preserves.</p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-lg">R75.00</p>
            </div>

            {/* Menu Card 3 */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Freshly Baked Scones</h3>
              <p className="text-base mb-4">Served with jam and cream, perfect with tea or coffee.</p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-lg">R35.00</p>
            </div>

            {/* Menu Card 4 */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Garden Salad</h3>
              <p className="text-base mb-4">Fresh greens with grilled chicken, seasonal vegetables, and house dressing.</p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-lg">R65.00</p>
            </div>

            {/* Menu Card 5 */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Artisan Coffee</h3>
              <p className="text-base mb-4">Premium espresso-based drinks with beautiful latte art.</p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-lg">R30.00</p>
            </div>

            {/* Menu Card 6 */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Pancake Stack</h3>
              <p className="text-base mb-4">Fluffy pancakes with maple syrup, fresh berries, and whipped cream.</p>
              <p className="text-[hsl(var(--pantry-orange))] font-bold text-lg">R55.00</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-6 py-2 rounded-full">
              Our Specials
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/generated/gallery-coffee.png"
                alt="Beautiful latte art at The Pantry"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/generated/gallery-salad.png"
                alt="Fresh garden salad"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/generated/gallery-pancakes.png"
                alt="Delicious pancake stack"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            The Pantry Café is committed to bringing a warm, family-friendly atmosphere with the best
            of Eastern Cape flavours. Our passion lies in creating memorable dining experiences using
            fresh, locally-sourced ingredients that celebrate the rich culinary heritage of our region.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're here for breakfast, a coffee break, or a celebratory meal, our dedicated
            team ensures you feel at home. We take pride in our handcrafted dishes, artisan coffee,
            and freshly baked goods made daily with love and care.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Contact & Location</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Address</h3>
                <p className="text-lg">73 Somerset Street, Aliwal North, Eastern Cape, 9750</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Phone</h3>
                <p className="text-lg">
                  <a href="tel:+27516334999" className="hover:underline">+27 51 633 4999</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Hours</h3>
                <p className="text-lg">Monday - Friday: 7:00 AM - 5:00 PM</p>
                <p className="text-lg">Saturday: 8:00 AM - 3:00 PM</p>
                <p className="text-lg">Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--pantry-navy))]">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/pantry_cafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--pantry-orange))] hover:text-[hsl(var(--pantry-navy))] font-bold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/thepantrybakerycafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--pantry-orange))] hover:text-[hsl(var(--pantry-navy))] font-bold"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[hsl(var(--pantry-cream))] rounded-lg h-96 flex items-center justify-center shadow-md">
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-[hsl(var(--pantry-navy))]"
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
                <h3 className="text-xl font-bold mb-2">Find Us in Aliwal North</h3>
                <p className="text-base mb-4">73 Somerset Street, Eastern Cape</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Pantry+Café+Aliwal+North"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-6 py-2 rounded-lg hover:bg-[hsl(var(--pantry-navy))] transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--pantry-navy))] text-[hsl(var(--pantry-cream))] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">
            © 2025 The Pantry Café – Aliwal North | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
