// import { useState } from "react";             {/* <InteractiveWelcome /> */}
      {/* <Login /> */}
      {/* <Welcome />   */}

// export function InteractiveWelcome() {
//   const [name, setName] = useState("");

//   const handleNameChange = (event) => {
//     const newName = event.target.value;
//     setName(newName)
 
//     }
//     return (
//       <div>
//       <input value={name} type="text" onChange={handleNameChange} />
//     </div>
//   );
// }

//   export function Welcome({ name }) {
//     return (
//     <div>
        
//         <p>Welcome {name}</p>;
//         </div> )
//   }
//  export function Login({ onLogin }) {
//    const [username, setUsername] = useState("");
//    const [password, setPassword] = useState("");
//    const [result, setRemember] = useState(false);

//    const handleUsernameChange = (event) => {
//      setUsername(event.target.value);
//    };

//    const handlePasswordChange = (event) => {
//     setPassword(event.target.value)
//    }
//    const handleCheckbox = (event) => {
//     setRemember(event.target.checked)
//    }
//    const handleReset = () => {
//      setUsername("");
//      setPassword("");
//      setRemember(false);
//    };

//    return (
//      <form>
//        <input
//          value={username}
//          onChange={handleUsernameChange}
//          type="text"
//          placeholder="Username"
//        />
//        <button
//          type="button"
//          disabled={!username || !password}
//          onClick={onLogin}
//        >
//          Login
//        </button>
//        <input
//          value={password}
//          onChange={handlePasswordChange}
//          type="password"
//          placeholder="Password"
//        />
//        <input checked={result} onChange={handleCheckbox} type="checkbox" />
//        <button type="button" onClick={handleReset}>Reset</button>
//      </form>
//    );
//  }

