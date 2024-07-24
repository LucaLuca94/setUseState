import { Clock } from "./Clock";
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter initialvalue={0} incrementValue={1} />

      <Clock />
    </div>
  );
}
