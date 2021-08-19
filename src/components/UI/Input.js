import styled from 'styled-components';

const Input = (props) => {
  return (
    <Wrap>
      <Label htmlFor={props.input.id}>{props.label}</Label>
      <UiInput {...props.input} />
    </Wrap>
  );
};

export default Input;

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const UiInput = styled.input`
  width: 2rem;
  display: flex;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 0.5rem;
`;
