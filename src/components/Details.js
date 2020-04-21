import React, { useContext } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
const Details = () => {
  const { detailProduct, addToCart, openModal } = useContext(ProductContext);
  const { id, company, img, info, price, title, inCart } = detailProduct;
  const handleClick = (e) => {
    addToCart(id);
    openModal(id);
  };
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 mx-auto my-3 col-md-6'>
          <img src={img} alt='Product detail' className='img-fluid' />
        </div>
        <div className='col-10 mx-auto my-3 col-md-6 text-capitalize'>
          <h2>model: {title}</h2>
          <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
            <span className='text-uppercase'>Made By: {company}</span>
          </h4>
          <h4 className='text-blue'>
            <strong>Price : ${price}</strong>
          </h4>
          <p className='text-capitalize mt-3 mb-0 font-weight-bold'>
            Description: {info}
          </p>
          <div>
            <Link to='/'>
              <ButtonContainer>Back To Home</ButtonContainer>
            </Link>
            <ButtonContainer
              disabled={inCart ? true : false}
              onClick={handleClick}
            >
              {inCart ? 'In Cart' : 'Add to cart'}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
