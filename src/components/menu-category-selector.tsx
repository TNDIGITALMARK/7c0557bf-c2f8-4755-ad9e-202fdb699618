'use client'

import { type MenuCategory, menuCategories } from '@/lib/menu-data'

interface MenuCategorySelectorProps {
  value: MenuCategory
  onChange: (category: MenuCategory) => void
}

export function MenuCategorySelector({ value, onChange }: MenuCategorySelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {menuCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={`px-6 py-2.5 rounded-lg font-bold text-base transition-all shadow-md hover:shadow-lg ${
            value === category.value
              ? 'bg-[hsl(var(--pantry-orange))] text-white scale-105'
              : 'bg-[hsl(var(--pantry-cream))] text-[hsl(var(--pantry-navy))] hover:bg-[hsl(var(--pantry-orange))] hover:text-white'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
