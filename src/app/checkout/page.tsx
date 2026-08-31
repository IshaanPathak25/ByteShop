'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { shopConfig } from '../../../config';
import styles from './page.module.css';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const shipping = subtotal > 0 && subtotal < 5000 ? 199 : 0;
  const total = subtotal + shipping;

  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (paymentMethod === 'cod') {
      // Simulate COD order placement
      await new Promise(r => setTimeout(r, 1000));
      clearCart();
      router.push('/order-confirmation?method=cod&orderId=' + Math.random().toString(36).slice(2, 10).toUpperCase());
      return;
    }

    // Razorpay
    try {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);
      await new Promise(r => (script.onload = r));

      const options = {
        key: shopConfig.razorpayKeyId,
        amount: total * 100, // paise
        currency: shopConfig.currencyCode,
        name: shopConfig.name,
        description: `Order from ${shopConfig.name}`,
        prefill: { name: form.name, email: form.email, contact: form.phone },
        theme: { color: '#6c63ff' },
        handler: (response: any) => {
          clearCart();
          router.push(`/order-confirmation?method=razorpay&orderId=${response.razorpay_payment_id}`);
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      setLoading(false);
      alert('Payment initialization failed. Please try again.');
    }
  }

  // Redirect to shop if cart is empty — must use useEffect to avoid SSR errors
  React.useEffect(() => {
    if (items.length === 0) router.replace('/shop');
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">Checkout</h1>
          <p className="page-header-sub">Complete your order securely</p>
        </div>
      </div>

      <div className="container">
        <form className={styles.layout} onSubmit={handleSubmit}>
          {/* Left — Form */}
          <div className={styles.formCol}>
            {/* Contact */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.stepNum}>1</span> Contact Information
              </h2>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="co-name">Full Name *</label>
                  <input id="co-name" name="name" className="input" placeholder="Rahul Sharma" required value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="co-phone">Phone *</label>
                  <input id="co-phone" name="phone" className="input" placeholder="+91 98765 43210" required value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="co-email">Email Address *</label>
                <input id="co-email" name="email" type="email" className="input" placeholder="rahul@email.com" required value={form.email} onChange={handleChange} />
              </div>
            </section>

            {/* Delivery Address */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.stepNum}>2</span> Delivery Address
              </h2>
              <div className="form-group">
                <label className="form-label" htmlFor="co-address">Street Address *</label>
                <input id="co-address" name="address" className="input" placeholder="House no, Street name" required value={form.address} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="co-city">City *</label>
                  <input id="co-city" name="city" className="input" placeholder="Bangalore" required value={form.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="co-state">State *</label>
                  <input id="co-state" name="state" className="input" placeholder="Karnataka" required value={form.state} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group" style={{ maxWidth: 200 }}>
                <label className="form-label" htmlFor="co-pincode">PIN Code *</label>
                <input id="co-pincode" name="pincode" className="input" placeholder="560001" required value={form.pincode} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="co-notes">Order Notes (optional)</label>
                <textarea id="co-notes" name="notes" className="textarea" placeholder="Special instructions..." value={form.notes} onChange={handleChange} style={{ minHeight: 80 }} />
              </div>
            </section>

            {/* Payment */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.stepNum}>3</span> Payment Method
              </h2>
              <div className={styles.paymentOptions}>
                <label className={`${styles.payOption} ${paymentMethod === 'razorpay' ? styles.payOptionActive : ''}`}>
                  <input type="radio" name="payment" value="razorpay" checked={paymentMethod === 'razorpay'} onChange={() => setPaymentMethod('razorpay')} className={styles.radio} />
                  <div className={styles.payIcon}>💳</div>
                  <div className={styles.payInfo}>
                    <span className={styles.payTitle}>Pay Online</span>
                    <span className={styles.payDesc}>UPI, Cards, Net Banking via Razorpay</span>
                  </div>
                  <div className={styles.payBadge}>Recommended</div>
                </label>
                <label className={`${styles.payOption} ${paymentMethod === 'cod' ? styles.payOptionActive : ''}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className={styles.radio} />
                  <div className={styles.payIcon}>💵</div>
                  <div className={styles.payInfo}>
                    <span className={styles.payTitle}>Cash on Delivery</span>
                    <span className={styles.payDesc}>Pay when your order arrives</span>
                  </div>
                </label>
              </div>
            </section>
          </div>

          {/* Right — Summary */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              <div className={styles.summaryItems}>
                {items.map(item => (
                  <div key={item.id} className={styles.summaryItem}>
                    <span className={styles.summaryItemName}>{item.name}</span>
                    <span className={styles.summaryItemQty}>×{item.quantity}</span>
                    <span className={styles.summaryItemPrice}>
                      {shopConfig.currency}{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.divider} />
              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>{shopConfig.currency}{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className={styles.free}>FREE</span> : `${shopConfig.currency}${shipping}`}</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Total</span>
                  <span>{shopConfig.currency}{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button
                id="checkout-submit-btn"
                type="submit"
                className={`btn btn-primary ${styles.placeOrderBtn}`}
                disabled={loading}
              >
                {loading ? '⏳ Processing...' : paymentMethod === 'cod' ? '✅ Place Order (COD)' : `🔒 Pay ${shopConfig.currency}${total.toLocaleString('en-IN')}`}
              </button>
              <div className={styles.secureNote}>
                <span>🔒</span> Secured by Razorpay — 256-bit SSL Encryption
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
