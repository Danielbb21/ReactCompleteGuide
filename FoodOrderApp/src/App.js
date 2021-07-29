import { useState } from "react";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meals";


function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true);
  }

  const hideCartHandler = () =>{
    setCartIsShow(false);
  }

  

  return (
    <>

      {cartIsShow &&<Cart onCloseCard = {hideCartHandler}/>}
      <Header onCardShow = {showCartHandler}/>
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
