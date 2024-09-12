import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Heart from "./components/Heart";

function App() {
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
      <Customer />
    </div>
  )
}

export default App;