'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import styles from './page.module.css';

function OrderContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') ?? 'N/A';
  const method = searchParams.get('method') === 'cod' ? 'Cash on Delivery' : 'Online Payment';

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.icon}>✅</div>
        <h1 className={styles.title}>Order Confirmed!</h1>
        <p className={styles.subtitle}>
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Order ID</span>
            <span className={styles.detailValue}># {orderId}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Payment</span>
            <span className={styles.detailValue}>{method}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Status</span>
            <span className="badge badge-green">Confirmed</span>
          </div>
        </div>
        <p className={styles.note}>
          We&apos;ll send you a confirmation message soon. For any queries, reach us on WhatsApp.
        </p>
        <div className={styles.actions}>
          <Link href="/shop" className="btn btn-primary btn-lg">Continue Shopping</Link>
          <Link href="/" className="btn btn-secondary btn-lg">Go Home</Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<div style={{ textAlign:'center', padding: '4rem' }}>Loading...</div>}>
        <OrderContent />
      </Suspense>
    </div>
  );
}
