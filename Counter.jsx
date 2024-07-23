import { useState } from "react"

export function Counter() {
   const [counter, setCounter]= useState(0)
   function handleCounterIncrement() {
        setCounter(counter + 1)
   }
   function handleCounterDecrement() {
        setCounter(counter - 1);
   }
   function handleCounterReset() {
     setCounter(0);
   }
    return (
      <div>
        <p>I have counted to {counter}</p>
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
      </div>
    );
  
}
export function  CounterDisplay() {
    return <h2>{counter}</h2>
}