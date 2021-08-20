import styled from 'styled-components';
import { useRef, useState } from 'react';
import Input from '../../UI/Input';
const MealItemForm = (props) => {
  const [amoundIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef?.current?.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Btn>+ Add</Btn>
      {!amoundIsValid && <p>Please enter a valid number (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

const Btn = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  :hover {
    background-color: #cf392b;
  }
`;
