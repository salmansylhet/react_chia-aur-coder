import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(1);

  let [msg, setMsg] = useState();

  console.log(msg);
  console.log(counter);
  const addValue = () => {
    
    // counter++
    // setCounter(counter);
    // console.log(counter);

    
    // setCounter(++counter);
    // console.log(counter);

    // setCounter(counter ++);
    // console.log(counter);
    counter++;
    
    if (counter <= 5 ) {
      setCounter(counter);
      console.log(counter);
      setMsg(null)
    }
    else {
      counter = 5;
      msg = 'You cannot increase more';
      setMsg(msg)
    }

    
  }

  const removeValue = ()=> {

    // counter--
    // setCounter(counter);
    // console.log(counter);

    counter = counter -1;
    if (counter >= 0 ) {
      
      setCounter(counter);
      console.log(counter);
      setMsg(null)
    }
    else {
      counter < 0;
      counter = 0;
      msg = 'You cannot decrease more';
      setMsg(msg);
    }
    
  }

  return (
    <>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add value</button> <br/>
    <button onClick={removeValue}>Remove value</button>
    <p>Counter value is: {counter}</p>
    <p> {msg}</p>
    </>  
  )
}

export default App
