'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { shopConfig } from '../../config';
import styles from './ProductCard.module.css';

interface Props { product: Product; }

const BADGE_CLASS: Record<string, string> = {
  New:         'badge-cyan',
  Sale:        'badge-orange',
  Popular:     'badge-accent',
  Refurbished: 'badge-glass',
};

const CATEGORY_ICON: Record<string, string> = {
  laptops:     '💻',
  desktops:    '🖥️',
  components:  '🔩',
  peripherals: '🖱️',
  accessories: '🖨️',
};

export default function ProductCard({ product }: Props) {
  const { addItem, openCart } = useCart();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id:    product.id,
      name:  product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0] ?? '',
    });
    openCart();
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/shop/${product.id}`} className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.imageIcon}>{CATEGORY_ICON[product.category] ?? '📦'}</span>
        </div>
        {product.badge && (
          <span className={`badge ${BADGE_CLASS[product.badge]} ${styles.badge}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className={`badge badge-red ${styles.discountBadge}`}>
            -{discount}%
          </span>
        )}
        {/* Quick overlay */}
        <div className={styles.overlay}>
          <button
            id={`add-to-cart-${product.id}`}
            className={`btn btn-primary ${styles.quickAdd}`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.brand}>{product.brand}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.shortDesc}>{product.shortDesc}</p>

        {/* Rating */}
        <div className={styles.ratingRow}>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < Math.round(product.rating) ? 'star' : 'star star-empty'}>★</span>
            ))}
          </div>
          <span className={styles.ratingVal}>{product.rating}</span>
          <span className={styles.reviewCount}>({product.reviewCount})</span>
          {product.inStock
            ? <span className="badge badge-green" style={{ marginLeft: 'auto' }}>In Stock</span>
            : <span className="badge badge-red"   style={{ marginLeft: 'auto' }}>Out of Stock</span>
          }
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>
            {shopConfig.currency}{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              {shopConfig.currency}{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
