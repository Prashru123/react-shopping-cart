import React, { useContext, useEffect } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
const CartTotals = () => {
  const { cartTotal, cartTax, cartSubTotal, clearCart, addTotals } = useContext(
    ProductContext
  );

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
          <Link to='/'>
            <button
              className='btn btn-outline-danger text-uppercase mb-3 px-5'
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </Link>
          <h5>
            <span className='text-title'>Subtotal:</span>
            <strong>${cartSubTotal}</strong>
          </h5>
          <h5>
            <span className='text-title'>Tax:</span>
            <strong>${cartTax}</strong>
          </h5>
          <h5>
            <span className='text-title'>Total:</span>
            <strong>${cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
