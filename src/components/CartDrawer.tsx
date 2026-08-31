'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { shopConfig } from '../../config';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  const shipping = subtotal >= 5000 ? 0 : 199;
  const total = subtotal + shipping;

  return (
    <>
      <div className={styles.overlay} onClick={closeCart} />
      <aside className={styles.drawer}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Shopping Cart</h2>
            <p className={styles.subtitle}>{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Free shipping badge */}
        {subtotal < 5000 && (
          <div className={styles.shippingNote}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add {shopConfig.currency}{(5000 - subtotal).toLocaleString('en-IN')} more for free shipping!
          </div>
        )}
        {subtotal >= 5000 && (
          <div className={`${styles.shippingNote} ${styles.shippingFree}`}>
            ✓ You qualify for free shipping!
          </div>
        )}

        {/* Items */}
        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🛒</span>
              <p className={styles.emptyTitle}>Your cart is empty</p>
              <p className={styles.emptyText}>Browse our shop and add some items!</p>
              <Link href="/shop" className="btn btn-primary" onClick={closeCart}>
                Browse Products
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImage}>
                  <span className={styles.itemImagePlaceholder}>🖥️</span>
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    {shopConfig.currency}{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.qty}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className={styles.qtyNum}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summary}>
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
            <Link href="/checkout" className={`btn btn-primary ${styles.checkoutBtn}`} onClick={closeCart}>
              Proceed to Checkout →
            </Link>
            <Link href="/cart" className={`btn btn-secondary ${styles.viewCartBtn}`} onClick={closeCart}>
              View Full Cart
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
