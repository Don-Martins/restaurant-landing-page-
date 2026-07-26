import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingBag01Icon, Cancel01Icon, Delete01Icon, Add01Icon, Remove01Icon, Tag01Icon, ArrowRight01Icon, Tick01Icon, DeliveryTruck01Icon, Store01Icon } from 'hugeicons-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (dishId: string, quantity: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [orderId, setOrderId] = useState('');

  // Form State
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const subtotal = cart.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 50 ? 0 : 4.99) : 0;
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = () => {
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'FLAVORIA20' || promoCode.trim().toUpperCase() === 'LUNCH30') {
      setAppliedDiscount(20);
    } else if (promoCode.trim().toUpperCase() === 'FAMILY25') {
      setAppliedDiscount(25);
    } else {
      setPromoError('Invalid promo code. Try FLAVORIA20');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newId);
    setCheckoutStep('success');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2D3A1F]/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#F4F1E8] text-[#2D3A1F] h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#CDD2C9] flex items-center justify-between bg-[#2D3A1F] text-[#F4F1E8]">
          <div className="flex items-center gap-2">
            <ShoppingBag01Icon size={20} className="text-[#B8A678]" />
            <h3 className="font-heading text-base font-bold uppercase tracking-wider">Your Order Basket</h3>
            <span className="bg-[#B8A678] text-[#2D3A1F] text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F4F1E8]/70 hover:text-[#F4F1E8] transition-colors cursor-pointer"
          >
            <Cancel01Icon size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {checkoutStep === 'success' ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 bg-[#2D3A1F] text-[#B8A678] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#B8A678]/30">
                <Tick01Icon size={32} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-heading font-bold text-[#B8A678] uppercase tracking-wider block">ORDER PLACED SUCCESSFULLY</span>
                <h3 className="font-heading text-2xl font-bold text-[#2D3A1F]">Chef Is Preparing Your Meal!</h3>
                <p className="text-xs text-[#2D3A1F]/70">
                  Tracking Code: <strong className="font-mono text-[#2D3A1F]">{orderId}</strong>
                </p>
              </div>

              <div className="bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl p-4 text-left text-xs space-y-2">
                <p><strong>Order Type:</strong> {orderType === 'delivery' ? 'Express Home Delivery' : 'Restaurant Takeaway Pick Up'}</p>
                <p><strong>Customer:</strong> {customerInfo.name} ({customerInfo.phone})</p>
                {orderType === 'delivery' && <p><strong>Address:</strong> {customerInfo.address}</p>}
                <p><strong>Total Paid:</strong> ${grandTotal.toFixed(2)}</p>
              </div>

              <button
                onClick={() => {
                  onClearCart();
                  onClose();
                  setCheckoutStep('cart');
                }}
                className="w-full bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                Close & Return To App
              </button>
            </div>
          ) : checkoutStep === 'checkout' ? (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#CDD2C9] pb-3">
                <h4 className="font-heading font-bold text-sm text-[#2D3A1F]">Delivery & Contact Info</h4>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="text-xs text-[#B8A678] hover:underline font-bold"
                >
                  ← Edit Cart
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Street name, apartment #, city..."
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                  Delivery Notes
                </label>
                <input
                  type="text"
                  placeholder="Gate code, drop off at door..."
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>
            </form>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-[#E8E2D0] rounded-full flex items-center justify-center mx-auto text-[#2D3A1F]/50">
                <ShoppingBag01Icon size={32} />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#2D3A1F]">Your Order Basket Is Empty</h4>
              <p className="text-xs text-[#2D3A1F]/70 max-w-xs mx-auto font-light">
                Explore our Chef's Recommendations and add delicious handcrafted dishes to your cart.
              </p>
            </div>
          ) : (
            <>
              {/* Order Type Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 rounded-lg text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-[#2D3A1F] text-[#F4F1E8] shadow-sm'
                      : 'text-[#2D3A1F]/70 hover:text-[#2D3A1F]'
                  }`}
                >
                  <DeliveryTruck01Icon size={16} /> Delivery
                </button>
                <button
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 rounded-lg text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    orderType === 'takeaway'
                      ? 'bg-[#2D3A1F] text-[#F4F1E8] shadow-sm'
                      : 'text-[#2D3A1F]/70 hover:text-[#2D3A1F]'
                  }`}
                >
                  <Store01Icon size={16} /> Takeaway
                </button>
              </div>

              {/* Item List */}
              <div className="space-y-3 divide-y divide-[#CDD2C9]">
                {cart.map((item) => (
                  <div key={item.dish.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                    <img
                      src={item.dish.image}
                      alt={item.dish.name}
                      className="w-14 h-14 rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 space-y-1">
                      <h4 className="font-heading font-bold text-xs text-[#2D3A1F] line-clamp-1">
                        {item.dish.name}
                      </h4>
                      <div className="text-[11px] text-[#B8A678] font-bold">
                        ${item.dish.price.toFixed(2)}
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, item.quantity - 1)}
                          className="w-5 h-5 rounded bg-[#E8E2D0] flex items-center justify-center text-[#2D3A1F] hover:bg-[#CDD2C9] cursor-pointer"
                        >
                          <Remove01Icon size={12} />
                        </button>
                        <span className="text-xs font-bold w-4 text-center text-[#2D3A1F]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, item.quantity + 1)}
                          className="w-5 h-5 rounded bg-[#E8E2D0] flex items-center justify-center text-[#2D3A1F] hover:bg-[#CDD2C9] cursor-pointer"
                        >
                          <Add01Icon size={12} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.dish.id)}
                      className="p-1.5 text-[#2D3A1F]/40 hover:text-[#2D3A1F] transition-colors cursor-pointer"
                    >
                      <Delete01Icon size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Promo Code Input */}
              <div className="pt-3 border-t border-[#CDD2C9] space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. FLAVORIA20)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-1.5 text-xs focus:outline-none uppercase font-mono text-[#2D3A1F]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="bg-[#2D3A1F] text-[#F4F1E8] text-xs font-heading font-bold px-3 py-1.5 rounded-xl hover:bg-[#B8A678] hover:text-[#2D3A1F] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedDiscount > 0 && (
                  <p className="text-xs text-[#2D3A1F] font-bold">✓ Promo code applied ({appliedDiscount}% Off)</p>
                )}
                {promoError && <p className="text-xs text-red-600 font-medium">{promoError}</p>}
              </div>
            </>
          )}
        </div>

        {/* Footer Totals & Action */}
        {cart.length > 0 && checkoutStep !== 'success' && (
          <div className="p-5 border-t border-[#CDD2C9] bg-[#E8E2D0] space-y-3">
            <div className="space-y-1.5 text-xs text-[#2D3A1F]/80">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#2D3A1F] font-bold">
                  <span>Discount ({appliedDiscount}%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>{deliveryFee === 0 ? <strong className="text-[#2D3A1F] uppercase font-bold">FREE</strong> : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-heading font-bold text-[#2D3A1F] pt-2 border-t border-[#CDD2C9]">
                <span>Grand Total:</span>
                <span className="text-[#2D3A1F]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Proceed To Checkout <ArrowRight01Icon size={16} />
              </button>
            ) : (
              <button
                type="submit"
                form="checkout-form"
                className="w-full bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Place Order Now (${grandTotal.toFixed(2)})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

