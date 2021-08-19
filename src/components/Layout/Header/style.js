import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export const Wrapper = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
`;
export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 5rem;
  transition: ease 5s;

  background-color: #8a2b06;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

Navbar.ImgWrap = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  img {
    width: 110%;
    height: 100%;

    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;

Navbar.Img = styled.img``;

export const Btn = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background: #4d1601;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  color: white;
  /* margin-left: 1200px; */
  :hover {
    background: #2c0d00;
  }
  :active {
    background: #2c0d00;
  }
`;

Btn.Icon = styled(AiOutlineShoppingCart)`
  width: 20px;
  margin-right: 0.5rem;
`;

Btn.Text = styled.div``;
Btn.Num = styled.div`
  background: #b94517;
  padding: 0.25rem 1rem;
  margin-left: 1rem;
  font-weight: bold;
  border-radius: 40%;
`;
