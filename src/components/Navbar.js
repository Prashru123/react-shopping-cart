import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
const Navbar = () => {
  return (
    <NavWrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
      <Link to='/'>
        <img src={logo} alt='store' />
      </Link>
      <ul className='navbar-nav align-item-center'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            products
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'>
            <i className='fas fa-cart-plus'> My Cart</i>
          </span>
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
