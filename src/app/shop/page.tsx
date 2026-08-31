'use client';

import { useState, useMemo } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating',     label: 'Best Rated' },
  { value: 'newest',     label: 'Newest' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy,   setSortBy]   = useState('featured');
  const [search,   setSearch]   = useState('');

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }
    switch (sortBy) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [activeCategory, sortBy, search]);

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">Our Store</p>
          <h1 className="page-header-title">Shop Products</h1>
          <p className="page-header-sub">Laptops, desktops, components and peripherals — all in one place</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Search */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Search</h3>
              <div className={styles.searchWrap}>
                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  id="shop-search"
                  type="text"
                  placeholder="Search products..."
                  className={styles.searchInput}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
            {/* Categories */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Categories</h3>
              <ul className={styles.catList}>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      id={`cat-${cat.id}`}
                      className={`${styles.catBtn} ${activeCategory === cat.id ? styles.catBtnActive : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      <span className={styles.catCount}>
                        {cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className={styles.main}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
              <p className={styles.resultCount}>
                <span className={styles.resultNum}>{filtered.length}</span> products found
              </p>
              <div className={styles.sortWrap}>
                <label htmlFor="sort-select" className={styles.sortLabel}>Sort by:</label>
                <select
                  id="sort-select"
                  className={`select ${styles.sortSelect}`}
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                >
                  {sortOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className={styles.empty}>
                <span>🔍</span>
                <h3>No products found</h3>
                <p>Try a different search or category</p>
                <button className="btn btn-primary" onClick={() => { setSearch(''); setActiveCategory('all'); }}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={styles.grid}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
