import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductContext from '../context';
const Product = ({
  product: { id, title, img, price, company, info, inCart },
}) => {
  const { handleDetail, addToCart, openModal } = useContext(ProductContext);
  const handleProductClick = () => {
    handleDetail(id);
  };
  const handleCartClick = () => {
    addToCart(id);
    openModal(id);
  };
  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='card'>
        <div className='img-container p-5' onClick={handleProductClick}>
          <Link to='/details'>
            <img src={img} alt={title} className='card-img-top' />
          </Link>
          <button
            className='cart-btn'
            disabled={inCart ? true : false}
            onClick={handleCartClick}
          >
            {inCart ? (
              <p className='text-capitalize mb-0' disabled>
                In Cart
              </p>
            ) : (
              <i className='fas fa-cart-plus'></i>
            )}
          </button>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center'>{title}</p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background-color: transparent;
    border-top: transparent;
    transition: all 2s linear;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: green;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background-color: rgb(130, 210, 200);
    }
    .card-img-top {
      transform: scale(1.2);
      transition: all 1s linear;
    }
  }
`;
