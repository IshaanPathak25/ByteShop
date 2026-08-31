'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { shopConfig } from '../../../../config';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

interface Props { params: { id: string } }

const CATEGORY_ICON: Record<string, string> = {
  laptops: '💻', desktops: '🖥️', components: '🔩', peripherals: '🖱️', accessories: '🖨️',
};

export default function ProductDetailPage({ params }: Props) {
  const found = products.find(item => item.id === params.id);
  if (!found) notFound();
  const product = found!; // notFound() throws, assert non-null for TS

  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products.filter(item => item.category === product.category && item.id !== product.id).slice(0, 3);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.images[0] ?? '' });
    }
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/shop">Shop</Link>
          <span>›</span>
          <span>{product.name}</span>
        </nav>

        {/* Main */}
        <div className={styles.main}>
          {/* Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageMain}>
              <span className={styles.imageIcon}>
                {CATEGORY_ICON[product.category] ?? '📦'}
              </span>
              {product.badge && <span className={`badge badge-accent ${styles.imageBadge}`}>{product.badge}</span>}
            </div>
          </div>

          {/* Info Column */}
          <div className={styles.infoCol}>
            <div className={styles.brandRow}>
              <span className="badge badge-glass">{product.brand}</span>
              <span className="badge badge-glass">{product.category}</span>
            </div>
            <h1 className={styles.productName}>{product.name}</h1>
            <div className={styles.ratingRow}>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < Math.round(product.rating) ? 'star' : 'star star-empty'}>★</span>
                ))}
              </div>
              <span className={styles.ratingVal}>{product.rating}</span>
              <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.price}>{shopConfig.currency}{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <>
                  <span className={styles.originalPrice}>{shopConfig.currency}{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="badge badge-red">Save {discount}%</span>
                </>
              )}
            </div>

            <p className={styles.description}>{product.description}</p>

            {/* Quantity */}
            <div className={styles.qtyRow}>
              <label className={styles.qtyLabel}>Quantity</label>
              <div className={styles.qtyControl}>
                <button className={styles.qtyBtn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <span className={styles.qtyNum}>{quantity}</span>
                <button className={styles.qtyBtn} onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <button
                id={`product-detail-add-${product.id}`}
                className={`btn btn-primary btn-lg ${styles.addBtn}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {added ? '✓ Added to Cart!' : product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
              </button>
              <a
                href={`https://wa.me/${shopConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name}. Is it available?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan btn-lg"
              >
                💬 WhatsApp Enquiry
              </a>
            </div>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              {['✅ Free Delivery on ₹5000+', '🛡️ 90-Day Warranty', '↩️ Easy Returns', '🔧 Expert Support'].map(b => (
                <span key={b} className={styles.trustBadge}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className={styles.specs}>
          <h2 className={styles.specsTitle}>Specifications</h2>
          <div className={styles.specsTable}>
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className={styles.specRow}>
                <span className={styles.specKey}>{key}</span>
                <span className={styles.specVal}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>Related Products</h2>
            <div className={styles.relatedGrid}>
              {related.map(item => <ProductCard key={item.id} product={item} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
