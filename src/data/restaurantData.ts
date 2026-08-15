import { MenuCategory, MenuItem, Chef, Review, GalleryItem, SpecialOffer, FAQItem } from '../types';
import testimonial1Img from '../assets/images/testimonial_1_1785780895359.jpg';
import testimonial2Img from '../assets/images/testimonial_2_1785780912514.jpg';
import testimonial3Img from '../assets/images/testimonial_3_1785780972620.jpg';
import testimonial4Img from '../assets/images/testimonial_4_1785781109693.jpg';

import chef1Img from '../assets/images/chef_1_black_coat_1785782789824.jpg';
import chef2Img from '../assets/images/chef_2_female_coat_1785782865330.jpg';
import chef3Img from '../assets/images/chef_3_male_toque_1785782878014.jpg';
import heroBgImg from '../assets/hero-bg.jpg';

export const HERO_IMAGE = heroBgImg;
export const AMBIANCE_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'cat-1',
    name: 'Starters',
    slug: 'starters',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400&q=80',
    itemCount: 8
  },
  {
    id: 'cat-2',
    name: 'Main Course',
    slug: 'main',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    itemCount: 14
  },
  {
    id: 'cat-3',
    name: 'Desserts',
    slug: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80',
    itemCount: 6
  },
  {
    id: 'cat-4',
    name: 'Beverages',
    slug: 'beverages',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
    itemCount: 10
  },
  {
    id: 'cat-5',
    name: 'Pizza',
    slug: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    itemCount: 7
  },
  {
    id: 'cat-6',
    name: 'Chef Specials',
    slug: 'specials',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    itemCount: 5
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Grilled Salmon Supreme',
    category: 'main',
    description: 'Crispy Atlantic salmon served with rich lemon herb butter sauce, seared asparagus, and microgreens.',
    price: 24.99,
    rating: 4.8,
    reviewsCount: 128,
    image: HERO_IMAGE,
    badge: 'Bestseller',
    dietary: ['Gluten-Free', 'Nut-Free'],
    prepTime: '20 mins',
    calories: 620
  },
  {
    id: 'dish-2',
    name: 'Creamy Prawn Garlic Pasta',
    category: 'main',
    description: 'Al dente penne pasta tossed with wild jumbo prawns, garlic cream sauce, and grated Aged Parmesan.',
    price: 21.99,
    rating: 4.7,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    badge: 'New',
    dietary: ['Nut-Free'],
    prepTime: '18 mins',
    calories: 740
  },
  {
    id: 'dish-3',
    name: 'Prime Ribeye Steak',
    category: 'main',
    description: 'Dry-aged 300g ribeye steak grilled to perfection, served with rosemary truffle butter and roasted potatoes.',
    price: 29.99,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef\'s Choice',
    dietary: ['Gluten-Free', 'Nut-Free'],
    prepTime: '25 mins',
    calories: 890
  },
  {
    id: 'dish-4',
    name: 'Classic Venetian Tiramisu',
    category: 'desserts',
    description: 'Layered espresso-soaked ladyfingers, velvety mascarpone cream, dark cocoa dust, and vintage Marsala.',
    price: 8.99,
    rating: 4.6,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    dietary: ['Vegetarian'],
    prepTime: '10 mins',
    calories: 450
  },
  {
    id: 'dish-5',
    name: 'Truffle Wild Mushroom Risotto',
    category: 'main',
    description: 'Slow-simmered Carnaroli rice infused with black truffle oil, porcini mushrooms, and shaved parmesan crisp.',
    price: 18.99,
    rating: 4.8,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80',
    dietary: ['Gluten-Free', 'Vegetarian'],
    prepTime: '22 mins',
    calories: 580
  },
  {
    id: 'dish-6',
    name: 'Artisanal Margherita Pizza',
    category: 'pizza',
    description: 'Hand-stretched sourdough crust, San Marzano tomato reduction, fresh Mozzarella di Bufala, and basil leaves.',
    price: 16.99,
    rating: 4.9,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    badge: 'Bestseller',
    dietary: ['Vegetarian', 'Nut-Free'],
    prepTime: '15 mins',
    calories: 680
  },
  {
    id: 'dish-7',
    name: 'Mango Passion Fruit Mocktail',
    category: 'beverages',
    description: 'Tropical blend of Alphonso mango nectar, fresh passion fruit pulp, mint sprigs, and sparkling mineral water.',
    price: 7.99,
    rating: 4.7,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    badge: 'New',
    dietary: ['Vegan', 'Gluten-Free', 'Nut-Free'],
    prepTime: '5 mins',
    calories: 140
  },
  {
    id: 'dish-8',
    name: 'Molten Chocolate Lava Cake',
    category: 'desserts',
    description: 'Warm Belgian dark chocolate cake with a molten liquid center, paired with Madagascar vanilla bean gelato.',
    price: 9.99,
    rating: 4.9,
    reviewsCount: 119,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef\'s Choice',
    dietary: ['Vegetarian'],
    prepTime: '12 mins',
    calories: 590
  },
  {
    id: 'dish-9',
    name: 'Crispy Burrata & Heirloom Tomato',
    category: 'starters',
    description: 'Fresh Italian Burrata cheese served with organic heirloom tomatoes, aged balsamic reduction, and pine nut pesto.',
    price: 14.99,
    rating: 4.8,
    reviewsCount: 68,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a28?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    dietary: ['Vegetarian', 'Gluten-Free'],
    prepTime: '10 mins',
    calories: 410
  },
  {
    id: 'dish-10',
    name: 'Seared Wagyu Beef Sliders',
    category: 'specials',
    description: 'Three mini A5 Wagyu beef patties with caramelized onion jam, aged cheddar, and truffle aioli on brioche buns.',
    price: 22.99,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: 'Limited',
    dietary: ['Nut-Free'],
    prepTime: '15 mins',
    calories: 780
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    iconName: 'Leaf',
    title: 'Fresh Farm Produce',
    description: 'Sourced directly from organic local growers every morning for peak natural flavor.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'why-2',
    iconName: 'Award',
    title: 'Michelin Skilled Chefs',
    description: 'Crafted by master culinary artists dedicated to precision plating and artisanal taste.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'why-3',
    iconName: 'Zap',
    title: 'Swift Table Service',
    description: 'Attentive, seamless service ensuring hot, fresh meals arrive without long delays.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'why-4',
    iconName: 'Heart',
    title: 'Cozy & Romantic Ambiance',
    description: 'Elegant candlelit interior designed for memorable dates, family dinners, and gatherings.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'why-5',
    iconName: 'Heart',
    title: 'Family & Group Comfort',
    description: 'Spacious table arrangements and tailored children menus for effortless group dining.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'why-6',
    iconName: 'ShieldCheck',
    title: 'Affordable Gourmet Quality',
    description: 'World-class culinary craftsmanship delivered at transparent, honest pricing.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  }
];

export const SERVICES = [
  {
    id: 'srv-1',
    title: 'Dine-In Fine Dining',
    description: 'Immerse yourself in our romantic dining hall with personalized table service, sommelier wine pairing, and chef specials.',
    icon: 'Utensils',
    highlight: 'Signature Experience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-2',
    title: 'Gourmet Takeaway',
    description: 'Enjoy restaurant-quality meals packed in eco-friendly insulated packaging to preserve heat and peak flavor.',
    icon: 'ShoppingBag',
    highlight: 'Ready in 20 Mins',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-3',
    title: 'Express Online Delivery',
    description: 'Temperature-controlled rapid delivery straight to your doorstep within a 10km radius.',
    icon: 'Truck',
    highlight: 'Free On $50+',
    image: 'https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-4',
    title: 'Private Events & Dinners',
    description: 'Exclusive access to our VIP dining room complete with custom menus and dedicated sommelier.',
    icon: 'GlassWater',
    highlight: 'Up to 50 Guests',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-5',
    title: 'Birthday & Anniversaries',
    description: 'Complimentary dessert decor, candlelit table setup, and customized champagne toasts for your milestone.',
    icon: 'Gift',
    highlight: 'Complimentary Cake',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-6',
    title: 'Corporate Catering',
    description: 'Premium tailored platters, executive lunches, and cocktail bite receptions for corporate hostings.',
    icon: 'Briefcase',
    highlight: 'Tailored Menus',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'chef-1',
    name: 'Kofi Mensah',
    role: 'Executive Head Chef',
    bio: 'Kofi brings 18 years of culinary mastery, crafting authentic Mediterranean fusion and fine dining art.',
    experienceYears: 18,
    specialty: 'Contemporary Mediterranean Fusion',
    awards: ['Culinary Excellence 2024'],
    image: chef1Img,
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'chef-2',
    name: 'Megi Gjata',
    role: 'Executive Pastry Chef',
    bio: 'Renowned pastry artist curating delicate gourmet desserts and botanical sweet creations.',
    experienceYears: 14,
    specialty: 'Artisanal Fine Pastry & Desserts',
    awards: ['Top Pastry Artist'],
    image: chef2Img,
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'chef-3',
    name: 'Marco Bellini',
    role: 'Grill Master & Sous Chef',
    bio: 'Master of open-flame cooking and precision knife craftsmanship, overseeing our signature prime cuts.',
    experienceYears: 12,
    specialty: 'Wood-Fired Seafood & Prime Cuts',
    awards: ['Master Grill Award'],
    image: chef3Img,
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Reserve Your Table',
    description: 'Select your preferred date, time slot, party size, and seating area in under 30 seconds online.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: '02',
    title: 'Arrive & Be Welcomed',
    description: 'Our host team greets you with a complimentary welcome aperitif and escorts you to your candlelit table.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: '03',
    title: 'Savor Exceptional Flavors',
    description: 'Indulge in handcrafted dishes made fresh by our master chefs, perfectly paired with artisanal wines.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: '04',
    title: 'Leave Delighted & Refreshed',
    description: 'Depart with unforgettable culinary memories and exclusive loyalty rewards for your next visit.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Marcus Vance',
    customerRole: 'Food & Lifestyle Critic',
    avatar: testimonial1Img,
    rating: 5,
    date: '2 days ago',
    comment: 'Fauget Restaurant exceeds every expectation! The Grilled Salmon was remarkably tender with an incredible citrus glaze. The ambience made our evening truly magical.',
    verified: true,
    dishOrdered: 'Grilled Salmon Supreme'
  },
  {
    id: 'rev-2',
    customerName: 'Aisha Robinson',
    customerRole: 'Regular Guest',
    avatar: testimonial2Img,
    rating: 5,
    date: '5 days ago',
    comment: 'The online table reservation was so fast. When we arrived, our table on the terrace was ready with candles lit. Staff hospitality is unmatched in the city!',
    verified: true,
    dishOrdered: 'Prime Ribeye Steak'
  },
  {
    id: 'rev-3',
    customerName: 'Dante Jackson',
    customerRole: 'Culinary Enthusiast',
    avatar: testimonial3Img,
    rating: 5,
    date: '1 week ago',
    comment: 'Ordered for a dinner party. Everything arrived hot, crisp, and presented like a five-star restaurant plate. The Tiramisu is pure perfection.',
    verified: true,
    dishOrdered: 'Classic Venetian Tiramisu'
  },
  {
    id: 'rev-4',
    customerName: 'Julian Thorne',
    customerRole: 'Executive Chef & Guest',
    avatar: testimonial4Img,
    rating: 5,
    date: '2 weeks ago',
    comment: 'Impeccable attention to detail, flavor balance, and presentation. Fauget is a benchmark for contemporary fine dining in the region.',
    verified: true,
    dishOrdered: 'Truffle Tagliatelle'
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Gourmet Lunch Special',
    subtitle: '2-Course Chef Express Menu',
    discount: '30% OFF',
    description: 'Enjoy a starter, main course, and artisan mocktail between 11:30 AM and 2:30 PM Monday to Friday.',
    badge: 'Weekday Exclusive',
    validUntil: 'Valid Mon - Fri',
    code: 'LUNCH30',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'offer-2',
    title: 'Weekend Romantic Package',
    subtitle: '3-Course Candlelight Tasting',
    discount: 'FREE CHAMPAGNE',
    description: 'Book a table for 2 on Friday or Saturday evening and receive a complimentary bottle of sparkling wine & dessert.',
    badge: 'Popular',
    validUntil: 'Fri & Sat Nights',
    code: 'ROMANCE',
    image: AMBIANCE_IMAGE
  },
  {
    id: 'offer-3',
    title: 'Family Feast Delivery',
    subtitle: 'Feeds 4 to 6 Guests',
    discount: '25% OFF',
    description: 'Includes 2 Large Artisanal Pizzas, 2 Pastas, Family Garlic Bread, and 4 Desserts delivered free.',
    badge: 'Best Value',
    validUntil: 'All Week Long',
    code: 'FAMILY25',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Artisanal Skillet Searing',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    title: 'Fresh Herb Pesto Fettuccine',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    title: 'Main Dining Atmosphere',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    title: 'Celebratory Group Dining',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    title: 'Heirloom Burrata Caprese',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'Wood-Fired Savory Tart',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-7',
    title: 'Master Chef Plating',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-8',
    title: 'Organic Farm Harvest',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-9',
    title: 'Fresh Mediterranean Salad',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-10',
    title: 'French Onion Casserole',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'reservations',
    question: 'How do I book a table?',
    answer: 'Click "Book Table" anywhere on our website, select your date, time, and number of guests. You will get an instant confirmation right away.'
  },
  {
    id: 'faq-2',
    category: 'events',
    question: 'What kind of dining options do you offer?',
    answer: 'We offer regular a la carte dining, daily chef specials, and private room options for family celebrations or group events.'
  },
  {
    id: 'faq-3',
    category: 'delivery',
    question: 'Do you offer food delivery or pickup?',
    answer: 'Yes! You can order online for home delivery within 10 km (free on orders over $50) or choose quick pickup at the restaurant.'
  },
  {
    id: 'faq-4',
    category: 'dietary',
    question: 'Do you have vegetarian, vegan, or allergy options?',
    answer: 'Yes! We clearly mark vegetarian, vegan, gluten-free, and nut-free dishes on our menu. Just inform your server about any dietary needs.'
  }
];
