import { Message } from "./message";

export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}</p>
      {age > 18 && <p>You are {age} Years old</p>}
      {age && <p>You are {age} Years old</p>}
      {age > 18 && age < 65 ? <p>You are {age} years old</p> : null}
      {age > 18 && name === "John" ? (
        <p>
          You are {age} years old, {name}
        </p>
      ) : null}
    </div>
  );
}
