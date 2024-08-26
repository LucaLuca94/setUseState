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
import { CounterDisplay } from "./counterDispaly";
import "./index.module.scss";
import { InteractiveWelcome, Login, Uwelcome } from "./FormExercise";
import { Container } from "./Container";
// import classes from "./index.module.scss"
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
// import { HelloWorld } from "./helloworld";
import { Hello } from "./HelloComponent";
import { GithubUser/*, GithubUsers*/ } from "./GithubUser";
import { Counter } from "./Counter"
import { UseCounter } from "./UseCounter";
import { GetData } from "./Api";
import { useCurrenLocation } from "./CurrentLocation";

// import { useCounter } from "./UseCounter";

export function App() {
  const {counter, onIncrement} = UseCounter();
  const handleLogin = (data) => {
    console.log("Dati login:", data);
  };
  const [Language, setLanguage] = useState('inglese')
  const { currentPosition, errorPosition, loadPosition, onLocation } =
    useCurrenLocation();

  function handleSetLanguage(Language){
    const lingua = setLanguage(Language)
  }
  return (
    <div>
      {/* <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button> */}
      {/* <Container title={<h1>These are my children...</h1>}> */}
        {/* <LanguageContext.Provider value={Language}>
          <select onChange={() => handleSetLanguage("italiano")}>
            <option value="inglese">Inglese</option>
            <option value="italiano">Italiano</option>
          </select>
          <Hello />
          <GithubUser username="gianmarcotoso" /> */}
          {/* <GithubUsers /> */}
          {/* <HelloWorld /> */}
          {/* <Counter initialvalue={0} incrementValue={1} /> */}
          {/* <useCounter /> */}
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
          {/* <button onClick={onIncrement}>{counter}</button>
          <Welcome name={"luca"} age={30} />
          <CounterDisplay counter={0} />
          <InteractiveWelcome />
          <Login onLogin={(data) => console.log(data)} />
          <Uwelcome name="John Doe" />
        </LanguageContext.Provider> */}
        < GetData />
            <h2>CURRENT LOCATION</h2>

      <button onClick={onLocation}>Show my position</button>
      {loadPosition && <h2>Loading...</h2>}
      {!errorPosition && (
        <div>
          <p>Latitude: {currentPosition.latitude}</p>
          <p>Longtude: {currentPosition.longitude}</p>
        </div>
    
      
  )}
  </div>
  )
}
