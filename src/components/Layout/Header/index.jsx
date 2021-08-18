import React from 'react';
import { Navbar, Wrapper, Btn } from './style';
import ImgFood from '../../../assets/img/foodimg.jpg';
const Header = () => {
  return (
    <Wrapper>
      <Navbar>
        <h1>Uchqkurgan Meals</h1>
        <Btn>Cart</Btn>
      </Navbar>
      <Navbar.ImgWrap>
        <img src={ImgFood} alt='Food' />
      </Navbar.ImgWrap>
    </Wrapper>
  );
};

export default Header;
