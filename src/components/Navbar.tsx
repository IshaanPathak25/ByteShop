'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { shopConfig } from '../../config';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/shop',    label: 'Shop' },
  { href: '/repair',  label: 'Repair' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname   = usePathname();
  const { itemCount, toggleCart } = useCart();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <nav className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 8h2l1 3 2-5 1 4h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.logoText}>{shopConfig.name}</span>
            </Link>

            {/* Desktop Links */}
            <ul className={styles.links}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className={styles.actions}>
              {/* Cart */}
              <button
                id="navbar-cart-btn"
                className={styles.cartBtn}
                onClick={toggleCart}
                aria-label="Open cart"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {itemCount > 0 && (
                  <span className={styles.cartBadge}>{itemCount > 99 ? '99+' : itemCount}</span>
                )}
              </button>

              {/* Book Repair CTA */}
              <Link href="/repair" className="btn btn-primary btn-sm">
                Book Repair
              </Link>

              {/* Hamburger */}
              <button
                id="navbar-menu-btn"
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
                <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
                <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          <a href={`tel:${shopConfig.phone}`} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
            📞 Call Us
          </a>
          <Link href="/repair" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
            Book Repair
          </Link>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
}
