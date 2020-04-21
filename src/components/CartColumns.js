import React from 'react';

const CartColumns = () => {
  return (
    <div className='container-fluid d-none text-center d-lg-block'>
      <div className='row'>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='tex-uppercase'>Products</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='tex-uppercase'>Name of Products</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='tex-uppercase'>Price</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='tex-uppercase'>Qunatity</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='tex-uppercase'>remove</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='tex-uppercase'>total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
