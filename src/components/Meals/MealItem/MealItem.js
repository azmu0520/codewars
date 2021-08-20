import { useContext } from 'react';
import styled from 'styled-components';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-contex';
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Li>
      <div>
        <h3>{props.name}</h3>
        <div className='text'>{props.description}</div>
        <div className='price'> {price} </div>
      </div>
      <div className='btn'>
        <MealItemForm onAddToCart={addCartHandler} />
      </div>
    </Li>
  );
};
export default MealItem;

const Li = styled.li`
  border-bottom: 1px solid #c1c4c9;
  padding-bottom: 20px;
  display: flex;
  .price {
    color: #cf782b;
    padding-top: 10px;
  }
  .text {
    font-style: italic;
  }

  .btn {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;
