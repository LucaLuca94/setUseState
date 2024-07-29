// import { useEffect, useRef } from "react";
// import { useState } from "react";

// function createData() {
//   return {
//     userName: "",
//     passWord: "",
//     session: false,
//   };
// }

// export function MyForm() {
//   const [data, setData] = useState(createData);

//   const mountedRef = useRef(false);

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);
//   if (!mountedRef.current) {
//     mountedRef.current = true;
//     console.log("mounting firts");
//   }
//   else {
//     console.log('mounted next');
//   }

//   function handleInputChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     const checked = event.target.checked;
//     const type = event.target.type;
//     setData((d) => {
//       return {
//         ...d,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   function handleResetForm() {
//     setData(createData);
//   }
//   function handleLoginFormSubmit(event) {
//     event.preventDefault();
//     console.log("login button required", data);
//   }
//   console.log(inputRef);
//   return (
//     <form onClick={handleLoginFormSubmit}>
//       <h1>My form</h1>
//       <input
//         name="userName"
//         ref={inputRef}
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
//       <button type="submit" disabled={!data.userName || !data.passWord}>
//         Login
//       </button>
//       <button onClick={handleResetForm}>Reset</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </form>
//   );
// }
