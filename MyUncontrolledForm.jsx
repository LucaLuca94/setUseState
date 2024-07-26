// export function MyUncontrolledForm() {
//     function handleFormSubmit(event) {
//         event.preventDefault()

//         const username = event.target.elements.username.value
//         const password = event.target.elements.password.value
//         const session = event.target.elements.session.checked

//         const data= {
//             username, password, session
//         }
//         console.log(data);
//     }
//     return(
//         <form onSubmit={handleFormSubmit}>
//             <h1>My uncontrolled form</h1>
//             <input name='username' />
//             <input name= 'password' type="password"/>
//             <input name= 'session' type="checkbox" />
//             <button>Login</button>
//             <button type="reset">Reset</button>
//         </form>
//     )
// }