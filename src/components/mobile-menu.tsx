'use client'

import { useState } from 'react'
import { Menu, X, Home, UtensilsCrossed, Cake, Image as ImageIcon, Star, Phone } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#menu', label: 'Menu', icon: UtensilsCrossed },
    { href: '/reservations', label: 'Cake Orders', icon: Cake },
    { href: '#gallery', label: 'Gallery', icon: ImageIcon },
    { href: '#reviews', label: 'Reviews', icon: Star },
    { href: '#contact', label: 'Contact', icon: Phone }
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-[60] bg-[hsl(var(--pantry-orange))] text-white p-3 rounded-lg shadow-lg hover:bg-[hsl(var(--pantry-navy))] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[55] backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-80 bg-[hsl(var(--pantry-navy))] z-[56] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-4 text-[hsl(var(--pantry-cream))] font-bold px-4 py-4 rounded-lg hover:bg-[hsl(var(--pantry-orange))] transition-all hover:scale-105"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="mt-12 pt-8 border-t border-[hsl(var(--pantry-cream))]/20">
            <div className="text-center">
              <h3 className="text-[hsl(var(--pantry-cream))] font-bold text-lg mb-4">
                Visit Us Today
              </h3>
              <a
                href="tel:+27516334999"
                className="inline-block bg-[hsl(var(--pantry-orange))] text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all shadow-lg mb-4"
              >
                Call Now
              </a>
              <p className="text-[hsl(var(--pantry-cream))]/80 text-sm">
                73 Somerset Street<br />
                Aliwal North, Eastern Cape
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
