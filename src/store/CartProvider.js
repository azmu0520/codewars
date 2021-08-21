import CartContext from './cart-contex';
import { useReducer } from 'react';

const defaultCartAmount = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;
    const existingCartItemIndex = state?.items?.findIndex(
      (item) => item.id === action?.items?.id
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
      updatedItems = state?.item?.concat(action.item);
    }

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
      items: item,
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
    remove: removeItemFromCardhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
