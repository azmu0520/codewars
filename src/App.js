import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <div className='App'>
        {showCart && <Cart onClose={hideCartHandler} />}
        <Header onShowCard={showCartHandler} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
