import styled from 'styled-components';
const CartItem = (props) => {
  const price = `$${props?.price}`;

  return (
    <Li>
      <PriceWrap>
        <h2>{props?.name}</h2>
        <PriceItem>
          <span> {price} </span>
          <span className='iks'> x{props?.amount} </span>
        </PriceItem>
      </PriceWrap>
      <BtnWrap>
        <button className='close' onClick={props?.onRemove}>
          -
        </button>
        <button onClick={props?.onAdd}>+</button>
      </BtnWrap>
    </Li>
  );
};
export default CartItem;
const PriceItem = styled.div`
  display: flex;
  .iks {
    margin-left: 20px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  margin-left: auto;
  button {
    width: 30px;
    height: 25px;
    color: #8a2b06;
    background-color: white;
    border-radius: 7px;
    font-size: 18px;
    font-weight: bolder;
    border: 1px solid #8a2b06;
  }
  .close {
    margin-right: 20px;
  }
`;

const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #aba7a7;
`;
