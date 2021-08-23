import CartContext from './cart-contex';
import { useReducer } from 'react';

const defaultCartAmount = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state?.items?.findIndex(
      (item) => item.id === action?.item?.id
    );
    const existingCartItem = state?.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem?.amount + action?.item?.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state?.items?.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state?.items?.findIndex(
      (item) => item.id === action?.item?.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
    }
  }
  return defaultCartAmount;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartAmount);
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
    items: cartState?.items,
    totalAmount: cartState?.totalAmount,
    addItem: addItemToCardhandler,
    removeItem: removeItemFromCardhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
