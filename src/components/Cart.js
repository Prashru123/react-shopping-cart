import React, { useContext, useEffect } from 'react';
import Title from './Title';
import CartColumns from './CartColumns';
import ProductContext from '../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
const Cart = () => {
  const { cart, addTotals, clearCart } = useContext(ProductContext);
  useEffect(() => {
    addTotals();
  }, []);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section>
      <Title name='Your' title='Cart' />
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
};

export default Cart;
