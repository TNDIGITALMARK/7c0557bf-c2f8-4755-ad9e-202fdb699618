export type MenuCategory = 'all' | 'drinks' | 'breakfast' | 'lunch' | 'supper' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
}

export const menuItems: MenuItem[] = [
  // Drinks
  {
    id: 'drink-1',
    name: 'Artisan Coffee',
    description: 'Premium espresso-based drinks with beautiful latte art.',
    price: 30.00,
    category: 'drinks'
  },
  {
    id: 'drink-2',
    name: 'Freshly Brewed Tea',
    description: 'Selection of premium teas served hot or iced.',
    price: 25.00,
    category: 'drinks'
  },
  {
    id: 'drink-3',
    name: 'Fresh Juice',
    description: 'Seasonal fruit juices made to order.',
    price: 35.00,
    category: 'drinks'
  },
  {
    id: 'drink-4',
    name: 'Smoothie',
    description: 'Creamy fruit smoothies with yogurt and honey.',
    price: 45.00,
    category: 'drinks'
  },

  // Breakfast
  {
    id: 'breakfast-1',
    name: 'Breakfast Platter',
    description: 'Eggs, bacon, sausage, and fresh bread with preserves.',
    price: 75.00,
    category: 'breakfast'
  },
  {
    id: 'breakfast-2',
    name: 'Pancake Stack',
    description: 'Fluffy pancakes with maple syrup, fresh berries, and whipped cream.',
    price: 55.00,
    category: 'breakfast'
  },
  {
    id: 'breakfast-3',
    name: 'Freshly Baked Scones',
    description: 'Served with jam and cream, perfect with tea or coffee.',
    price: 35.00,
    category: 'breakfast'
  },
  {
    id: 'breakfast-4',
    name: 'Eggs Benedict',
    description: 'Poached eggs on English muffin with hollandaise sauce.',
    price: 65.00,
    category: 'breakfast'
  },
  {
    id: 'breakfast-5',
    name: 'Omelette',
    description: 'Three-egg omelette with your choice of fillings.',
    price: 60.00,
    category: 'breakfast'
  },

  // Lunch
  {
    id: 'lunch-1',
    name: 'Chicken & Mushroom Pie',
    description: 'Rich, creamy filling in a buttery pastry crust.',
    price: 45.00,
    category: 'lunch'
  },
  {
    id: 'lunch-2',
    name: 'Garden Salad',
    description: 'Fresh greens with grilled chicken, seasonal vegetables, and house dressing.',
    price: 65.00,
    category: 'lunch'
  },
  {
    id: 'lunch-3',
    name: 'Club Sandwich',
    description: 'Triple-decker with chicken, bacon, lettuce, tomato, and mayo.',
    price: 70.00,
    category: 'lunch'
  },
  {
    id: 'lunch-4',
    name: 'Beef Burger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce.',
    price: 85.00,
    category: 'lunch'
  },
  {
    id: 'lunch-5',
    name: 'Pasta Alfredo',
    description: 'Creamy fettuccine with grilled chicken and parmesan.',
    price: 75.00,
    category: 'lunch'
  },

  // Supper
  {
    id: 'supper-1',
    name: 'Grilled Steak',
    description: 'Prime cut steak with chips and seasonal vegetables.',
    price: 125.00,
    category: 'supper'
  },
  {
    id: 'supper-2',
    name: 'Fish & Chips',
    description: 'Crispy battered fish with golden fries and tartar sauce.',
    price: 95.00,
    category: 'supper'
  },
  {
    id: 'supper-3',
    name: 'Roast Chicken',
    description: 'Half roasted chicken with roasted vegetables and gravy.',
    price: 105.00,
    category: 'supper'
  },
  {
    id: 'supper-4',
    name: 'Lamb Curry',
    description: 'Tender lamb in aromatic curry sauce with rice.',
    price: 110.00,
    category: 'supper'
  },
  {
    id: 'supper-5',
    name: 'Vegetarian Lasagna',
    description: 'Layers of pasta with vegetables and cheese sauce.',
    price: 80.00,
    category: 'supper'
  },

  // Dessert
  {
    id: 'dessert-1',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream.',
    price: 45.00,
    category: 'dessert'
  },
  {
    id: 'dessert-2',
    name: 'Cheesecake',
    description: 'Creamy New York style cheesecake with berry compote.',
    price: 50.00,
    category: 'dessert'
  },
  {
    id: 'dessert-3',
    name: 'Apple Crumble',
    description: 'Baked apple crumble with custard or ice cream.',
    price: 40.00,
    category: 'dessert'
  },
  {
    id: 'dessert-4',
    name: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert.',
    price: 55.00,
    category: 'dessert'
  },
  {
    id: 'dessert-5',
    name: 'Ice Cream Sundae',
    description: 'Three scoops with chocolate sauce, nuts, and whipped cream.',
    price: 35.00,
    category: 'dessert'
  }
];

export const menuCategories: { value: MenuCategory; label: string }[] = [
  { value: 'all', label: 'All Items' },
  { value: 'drinks', label: 'Drinks' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'supper', label: 'Supper' },
  { value: 'dessert', label: 'Dessert' }
];
