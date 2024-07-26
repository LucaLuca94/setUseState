// import { Clock } from "./Clock";
// import { Counter } from "./Counter";

// import { MouseClicker } from "./MouseClicker";
// import { MyForm } from "./MyForm";
// import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { UncontrolledLogin } from "./UncontrolledFormExercise";

export function App() {
  const handleLogin = (data) => {
    console.log("Dati login:", data);
  };
  return (
    <div>
      {/* <Counter initialvalue={0} incrementValue={1} />

      <Clock />
       <MouseClicker /> 
      <MyForm />
      <MyUncontrolledForm /> */}
      <UncontrolledLogin onLogin={handleLogin} />
    </div>
  );
}
