import styled from 'styled-components';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <Wraper>
        {cartItems}
        <div>
          <span className='text'>Total Amount</span>
          <span className='num'>35.62</span>
        </div>
        <div className='btnWrap'>
          <button className='btnCancel' onClick={props.onClose}>
            Close
          </button>
          <button className='btnOrder'>Order</button>
        </div>
      </Wraper>
    </Modal>
  );
};

export default Cart;

const Wraper = styled.div`
  .text {
    font-size: 22px;
    font-weight: bolder;
  }
  .num {
    font-size: 22px;
    font-weight: bolder;
    margin-left: 70%;
  }

  .btnOrder {
    background: #8a2b06;
    /* #8a2b06; */
    padding: 1em 2em;
    color: #fff;
    border: 0;
    border-radius: 30px;
    font-weight: bolder;
    font-size: 15px;
    cursor: pointer;
    margin-left: 10px;
  }
  .btnWrap {
    margin-left: 70%;
    margin-top: 20px;
  }
  .btnCancel {
    background: white;
    /* #8a2b06; */
    padding: 1em 2em;
    border: 1px solid #8a2b06;
    color: #8a2b06;
    font-weight: bolder;
    outline: none;
    font-size: 15px;
    border-radius: 30px;

    cursor: pointer;
  }
  /* padding: 200px; */
  /* margin: 200px; */
`;
