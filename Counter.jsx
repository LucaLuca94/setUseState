import { useEffect, useState } from "react"

export function Counter({ initialvalue = 0, incrementValue = 1 }) {
  const [counter, setCounter] = useState(initialvalue);

  useEffect(() => {
    console.log(`The value of this counter is ${counter}`);
    /* Sto usando la modalità rigorosa quindi ho aggiunto una funzione di pulizia */
    return () => {
      console.log(`The value of this counter was ${counter}`);
    };
  }, [counter]);
  function handleCounterIncrement() {
    setCounter(counter + incrementValue);
  }
  function handleCounterDecrement() {
    setCounter(counter - incrementValue);
  }
  function handleCounterReset() {
    setCounter(initialvalue);
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