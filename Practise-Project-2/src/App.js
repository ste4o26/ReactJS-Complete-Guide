import React, { useState } from 'react';

import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

import CartProvider from './context/CartProvider';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () =>
    setIsCartOpen(prevIsCartOpen => setIsCartOpen(!prevIsCartOpen));

  return (
    <CartProvider>
      {isCartOpen && <Cart onCloseCart={toggleCart} />}
      <Header onOpenCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
