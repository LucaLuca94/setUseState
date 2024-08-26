import { UseCounter } from "./UseCounter";


export function Counter({ initialValue = 0, incrementValue = 1 }) {
//   const [counter, setCounter] = useState(initialvalue);

  
//   function handleCounterIncrement() {
//     setCounter((c) => c + 1);
//   }
//   function handleCounterDecrement() {
//     setCounter((c) => c - 1);
//   }
//   function handleCounterReset() {
//     setCounter(initialvalue);
//   }


const {counter, onIncrement, onDecrement, onReset} = UseCounter(initialValue)
  return (
    <div>
      <p>I have counted to {counter}</p>
      <button className= 'button' onClick={onIncrement}>Increment</button>
      <button className= 'button' onClick={onDecrement}>Decrement</button>
      <button className= 'button' onClick={onReset}>Reset</button>
    </div>
  );
}
// export function  CounterDisplay(counter) {
   
//   return <h2>{counter}</h2>
// }