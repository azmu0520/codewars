import styled from 'styled-components';
import Input from '../../UI/Input';
const MealItemForm = (props) => {
  return (
    <form>
      <Input
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
