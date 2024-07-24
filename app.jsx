import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";

export function App() {
  return (
    <div>
      <Counter initialvalue={0} incrementValue={1} />

      <Clock />
      <MouseClicker />
    </div>
  );
}
