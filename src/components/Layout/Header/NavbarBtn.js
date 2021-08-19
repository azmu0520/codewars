import { Btn } from './style';

const NavabrBtn = (props) => {
  return (
    <Btn onClick={props.onClick}>
      <Btn.Icon />
      <Btn.Text>Cart</Btn.Text>
      <Btn.Num>3</Btn.Num>
    </Btn>
  );
};

export default NavabrBtn;
