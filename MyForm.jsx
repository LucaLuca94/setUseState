// import { useState } from "react";

// function createData() {
//     return {
//       userName: "",
//       passWord: "",
//       session: false,
//     };
// }

// export function MyForm() {
//   const [data, setData] = useState(createData);

//   function handleInputChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     const checked = event.target.checked
//     const type = event.target.type
//     setData((d) => {
//       return {
//         ...d,
//         [name]: type === 'checkbox' ? checked : value,
//       };
//     });
//   }

//   function handleResetForm() {
//     setData(createData);
//   }

//   return (
//     <div>
//       <h1>My form</h1>
//       <input
//         name="userName"
//         value={data.userName}
//         onChange={handleInputChange}
//       />
//       <input
//         name="passWord"
//         type="passWord"
//         value={data.passWord}
//         onChange={handleInputChange}
//       />
//       <input
//         name="session"
//         type="checkbox"
//         checked={data.session}
//         onChange={handleInputChange}
//       />
//       <button disabled={!data.userName || !data.passWord}>Login</button>
//       <button onClick={handleResetForm}>Reset</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }
