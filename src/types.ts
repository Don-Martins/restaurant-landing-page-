export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'main' | 'desserts' | 'beverages' | 'pizza' | 'specials';
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: 'Bestseller' | 'New' | 'Chef\'s Choice' | 'Popular' | 'Limited';
  dietary?: ('Gluten-Free' | 'Vegetarian' | 'Vegan' | 'Nut-Free')[];
  prepTime?: string;
  calories?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: 'starters' | 'main' | 'desserts' | 'beverages' | 'pizza' | 'specials';
  image: string;
  itemCount: number;
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Indoor Dining' | 'Outdoor Terrace' | 'Chef\'s Counter' | 'Private Dining Room';
  occasion?: string;
  specialRequests?: string;
  status?: 'Confirmed' | 'Pending';
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  bio: string;
  experienceYears: number;
  specialty: string;
  awards: string[];
  image: string;
}

export interface Review {
  id: string;
  customerName: string;
  customerRole?: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  dishOrdered?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'restaurant' | 'kitchen' | 'events';
  image: string;
  aspect?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  description: string;
  badge: string;
  validUntil: string;
  code: string;
  image: string;
}

export interface FAQItem {
  id: string;
  category: 'reservations' | 'delivery' | 'parking' | 'events' | 'dietary';
  question: string;
  answer: string;
}
