// import { Clock } from "./Clock";
// import { Counter, CounterDisplay } from "./Counter";

// import { MouseClicker } from "./MouseClicker";
// import { MyForm } from "./MyForm";
// import { MyUncontrolledForm } from "./MyUncontrolledForm";
// import { UncontrolledLogin } from "./UncontrolledFormExercise";
// import { Mylist } from "./myList";
// // import { FocusableInput } from "./useRef"
// import { Color } from "./ListExercise";
// import { Colors } from "./ListExercise"
import { Welcome } from "./welcome";
import {CounterDisplay} from "./counterDispaly"
import "./index.module.scss";
import { InteractiveWelcome, Login, Uwelcome } from "./FormExercise";



export function App() {
  const handleLogin = (data) => {
    console.log("Dati login:", data);
  };
  return (
    <div className="app">
      {/* <Counter initialvalue={0} incrementValue={1} /> */}
      {/* 
      // <Clock />
      //  <MouseClicker /> 
      //  <MyUncontrolledForm />  */}
      {/* <UncontrolledLogin onLogin={handleLogin} /> */}
      {/* <MyForm /> */}
      {/* < FocusableInput /> */}
      {/* < Mylist items= {[
        {id:1, name:'Jane', age: 20},
       {id:2, name:'Kate', age: 56 } ,
        {id:3, name:'Jonh', age:45},
       {id:4, name:'Jimmy', age:43} ,
       {id:5, name:'Jane', age: 25} ,
      ]} />
      <Color items={[{ id: 1, name: "Luca" }]} />
      <Colors
        colorate={[
          { id: 1, name: "Jane" },
          { id: 2, name: "Kate" },
          { id: 3, name: "Jonh" },
          { id: 4, name: "Jimmy" },
          { id: 5, name: "Jane" },
        ]}
      /> */}
      {/* <Counter /> */}
      <Welcome name={"luca"} age={30} />
      <CounterDisplay counter={0} />
      <InteractiveWelcome />
      <Login onLogin={(data) => console.log(data)} />
      <Uwelcome name="John Doe" />
    </div>
  );
}
