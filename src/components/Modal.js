import React, { useContext } from 'react';
import ProductContext from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
const Modal = () => {
  const { isModal, closeModal, modalProduct } = useContext(ProductContext);
  const { img, title, price, id } = modalProduct;
  if (!isModal) {
    return null;
  }
  return (
    <ModalContainer>
      <div className='container'>
        <div className='row'>
          <div
            id='modal'
            className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
          >
            <h5>Item added to the cart</h5>
            <h5>{title}</h5>
            <img src={img} className='img-fluid' alt='Product Mdl' />
            <h5 className='text-muted'>Price: ${price}</h5>
            <Link to='/'>
              <ButtonContainer onClick={() => closeModal(id)}>
                Continue Shopping
              </ButtonContainer>
            </Link>
            <Link to='/cart'>
              <ButtonContainer onClick={() => closeModal(id)}>
                Go To Cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom;
background:rgba(0,0,0,3)
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}
`;
