import CartContext from './cart-contex';
import { useReducer } from 'react';

const defaultCartAmount = {
  item: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.item.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartAmount;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, defaultCartAmount);
  const addItemToCardhandler = (item) => {
    dispatchCart({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemFromCardhandler = (id) => {
    dispatchCart({
      type: 'REMOVE',
      id: id,
    });
  };
  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCardhandler,
    remove: removeItemFromCardhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
