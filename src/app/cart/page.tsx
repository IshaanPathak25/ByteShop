'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { shopConfig } from '../../../config';
import styles from './page.module.css';

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, clearCart } = useCart();
  const shipping = subtotal > 0 && subtotal < 5000 ? 199 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="container">
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🛒</span>
            <h1>Your cart is empty</h1>
            <p>Looks like you haven&apos;t added anything yet.</p>
            <Link href="/shop" className="btn btn-primary btn-lg">Browse Products</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">Shopping Cart</h1>
          <p className="page-header-sub">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>
      <div className="container">
        <div className={styles.layout}>
          {/* Items */}
          <div className={styles.itemsCol}>
            <div className={styles.itemsHeader}>
              <h2 className={styles.itemsTitle}>Order Items</h2>
              <button className="btn btn-ghost btn-sm" onClick={clearCart}>Clear All</button>
            </div>
            {items.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImage}>
                  <span>🖥️</span>
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemUnitPrice}>{shopConfig.currency}{item.price.toLocaleString('en-IN')} each</p>
                </div>
                <div className={styles.itemRight}>
                  <div className={styles.qtyControl}>
                    <button className={styles.qtyBtn} onClick={() => updateQty(item.id, item.quantity - 1)}>−</button>
                    <span className={styles.qtyNum}>{item.quantity}</span>
                    <button className={styles.qtyBtn} onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p className={styles.itemTotal}>
                    {shopConfig.currency}{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                  <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Subtotal ({items.reduce((s,i)=>s+i.quantity,0)} items)</span>
                  <span>{shopConfig.currency}{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className={styles.free}>FREE</span> : `${shopConfig.currency}${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className={styles.shippingNote}>
                    Add {shopConfig.currency}{(5000 - subtotal).toLocaleString('en-IN')} more for free shipping
                  </p>
                )}
                <div className={styles.divider} />
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Total</span>
                  <span>{shopConfig.currency}{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <Link href="/checkout" className={`btn btn-primary ${styles.checkoutBtn}`} id="cart-checkout-btn">
                Proceed to Checkout →
              </Link>
              <Link href="/shop" className={`btn btn-secondary ${styles.continueBtn}`}>
                ← Continue Shopping
              </Link>
              <div className={styles.trustRow}>
                {['🔒 Secure Checkout', '🛡️ Warranty Included', '↩️ Easy Returns'].map(t => (
                  <span key={t} className={styles.trustItem}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
