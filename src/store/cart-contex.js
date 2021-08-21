import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: '',
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
