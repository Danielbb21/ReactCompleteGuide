import { useState } from "react";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }



  return (
    <CartProvider>

      {cartIsShow && <Cart onCloseCard={hideCartHandler} />}
      <Header onCardShow={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
