import React, { useContext } from 'react';
import ProductContext from '../context';
const CartItem = ({ item: { id, title, img, count, total, price } }) => {
  const { increment, decrement, removeItem, clearCart } = useContext(
    ProductContext
  );
  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='mx-auto col-10 col-lg-2'>
        <img
          src={img}
          alt='img'
          style={{ width: '5rem', height: '5rem' }}
          className='img=fluid'
        />
      </div>
      <div className='mx-auto col-10 col-lg-2'>
        <span className='d-lg-none'>Product: </span>
        {title}
      </div>
      <div className='mx-auto col-10 col-lg-2'>
        <span className='d-lg-none'>Price: </span>
        {price}
      </div>
      <div className='mx-auto col-10 col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div className=''>
            <span className='btn btn-black mx-1' onClick={() => decrement(id)}>
              -
            </span>

            <span className='btn btn-black mx-1'>{count}</span>
            <span className='btn btn-black mx-1' onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash'></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>{total}</div>
    </div>
  );
};

export default CartItem;
