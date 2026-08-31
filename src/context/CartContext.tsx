'use client';

import React, { createContext, useContext, useEffect, useReducer } from 'react';

// ── Types ──────────────────────────────────────────────────
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  brand: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM';    payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QTY';  payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD';        payload: CartItem[] };

// ── Reducer ─────────────────────────────────────────────────
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'UPDATE_QTY':
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'LOAD':
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────────
interface CartContextValue {
  items:       CartItem[];
  isOpen:      boolean;
  itemCount:   number;
  subtotal:    number;
  addItem:     (item: Omit<CartItem, 'quantity'>) => void;
  removeItem:  (id: string) => void;
  updateQty:   (id: string, quantity: number) => void;
  clearCart:   () => void;
  toggleCart:  () => void;
  openCart:    () => void;
  closeCart:   () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

// ── Provider ──────────────────────────────────────────────────
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('byteshop_cart');
    if (saved) {
      try {
        dispatch({ type: 'LOAD', payload: JSON.parse(saved) });
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('byteshop_cart', JSON.stringify(state.items));
  }, [state.items]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal  = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const ctx: CartContextValue = {
    items:      state.items,
    isOpen:     state.isOpen,
    itemCount,
    subtotal,
    addItem:    (item) => dispatch({ type: 'ADD_ITEM',    payload: item }),
    removeItem: (id)   => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateQty:  (id, q)=> dispatch({ type: 'UPDATE_QTY',  payload: { id, quantity: q } }),
    clearCart:  ()     => dispatch({ type: 'CLEAR_CART' }),
    toggleCart: ()     => dispatch({ type: 'TOGGLE_CART' }),
    openCart:   ()     => dispatch({ type: 'OPEN_CART' }),
    closeCart:  ()     => dispatch({ type: 'CLOSE_CART' }),
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
}

// ── Hook ──────────────────────────────────────────────────────
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
