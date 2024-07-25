import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome, Login, Welcome } from "./FormExercise";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";

export function App() {
  return (
    <div>
      <Counter initialvalue={0} incrementValue={1} />

      <Clock />
      {/* <MouseClicker /> */}
      {/* <MyForm /> */}
      <InteractiveWelcome />
      <Login />
      <Welcome />
    </div>
  );
}
