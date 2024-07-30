import { useState } from "react";


export function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  return (
    <div>
      <input value={name} type="text" onChange={handleNameChange} />
    </div>
  );
}


export function Uwelcome({ name }) {
  return (
    <div>
      <p>Welcome {name}</p>
    </div>
  );
}


export function Login({ onLogin }) {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [remember, setRemember] = useState(false);
      const buttonStyle = {
        backgroundColor: password.length < 8 ? "red" : "green",
        color: "white",
      };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  const handleLogin = () => {
    onLogin({ username, password, remember });
  };

  return (
    <form>
      <input
        value={username}
        onChange={handleUsernameChange}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        style={buttonStyle}
        onChange={handlePasswordChange}
        type="password"
        placeholder="Password"
      />
      <input
        checked={remember}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <button
        type="button"
        disabled={!username || !password}
        onClick={handleLogin}
      >
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
