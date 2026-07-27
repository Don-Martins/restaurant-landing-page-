import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuCategories } from './components/MenuCategories';
import { ChefsRecommendations } from './components/ChefsRecommendations';
import { RestaurantExperience } from './components/RestaurantExperience';
import { ServicesSection } from './components/ServicesSection';
import { MeetChefs } from './components/MeetChefs';
import { HowItWorks } from './components/HowItWorks';
import { CustomerReviews } from './components/CustomerReviews';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { MapModal } from './components/MapModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CartItem, MenuItem, ReservationData } from './types';
import { MENU_ITEMS } from './data/restaurantData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([
    { dish: MENU_ITEMS[0], quantity: 1 },
    { dish: MENU_ITEMS[3], quantity: 1 },
  ]);

  // Modal States
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [activeDishModal, setActiveDishModal] = useState<MenuItem | null>(null);

  // Cart Management
  const handleAddToCart = (dish: MenuItem, quantity: number = 1, specialInstructions: string = '') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.dish.id === dish.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        if (specialInstructions) {
          updated[existingIndex].specialInstructions = specialInstructions;
        }
        return updated;
      }
      return [...prevCart, { dish, quantity, specialInstructions }];
    });
  };

  const handleUpdateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.dish.id === dishId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('chefs-recommendations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReservationSuccess = (res: ReservationData) => {
    console.log('Reservation successful:', res);
  };

  return (
    <div className="min-h-screen bg-[#F4F1E8] text-[#2D3A1F] font-sans antialiased pb-16 lg:pb-0 relative">
      {/* Back To Top Button */}
      <BackToTop />
      {/* Navigation Header */}
      <Header
        cart={cart}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        activeSection="home"
      />

      {/* Main Page Layout Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenReservation={() => setReservationModalOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. Menu Categories (Circular Avatars) */}
        <MenuCategories
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 3. Chef's Recommendations / Interactive Signature Dishes */}
        <ChefsRecommendations
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onAddToCart={(dish) => handleAddToCart(dish, 1)}
          onOpenDishModal={(dish) => setActiveDishModal(dish)}
        />

        {/* 4. Restaurant Experience (About Us - Stacked Cards) */}
        <RestaurantExperience
          onOpenReservation={() => setReservationModalOpen(true)}
        />

        {/* 5. How It Works (Simple Steps) */}
        <HowItWorks />

        {/* 6. Our Services (Dine-in, Takeaway, Delivery, Events, Catering) */}
        <ServicesSection
          onOpenReservation={() => setReservationModalOpen(true)}
          onExploreMenu={() => setCartDrawerOpen(true)}
        />

        {/* 7. Meet Our Master Chefs */}
        <MeetChefs />

        {/* 8. Customer Reviews & Guest Testimonials */}
        <CustomerReviews />

        {/* 9. Photo Gallery */}
        <GallerySection />

        {/* 10. Main Interactive Contact & Table Reservation */}
        <ReservationSection
          onSuccessReservation={handleReservationSuccess}
        />

        {/* 11. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenMap={() => setMapModalOpen(true)}
      />

      {/* Popups & Drawers */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        onSuccess={handleReservationSuccess}
      />

      <DishDetailModal
        dish={activeDishModal}
        onClose={() => setActiveDishModal(null)}
        onAddToCart={(dish, qty, notes) => handleAddToCart(dish, qty, notes)}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectDish={(dish) => setActiveDishModal(dish)}
        onAddToCart={(dish) => handleAddToCart(dish, 1)}
      />

      <MapModal
        isOpen={mapModalOpen}
        onClose={() => setMapModalOpen(false)}
      />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyBar
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
    </div>
  );
}
