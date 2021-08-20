import React from 'react';

const CartContext = React.createContext({
  item: [],
  totalAmount: '',
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
