import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Heart from "./components/Heart";
import Customer from "./components/customer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Player from "./components/player";

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2'])

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true)
        }}
      >My Button</Button>

      <Heart onClick={() => console.log('clicked') }/>
        <Navbar cartItemsCount={cartItems.length}/>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </div>
  )
}

export default App;