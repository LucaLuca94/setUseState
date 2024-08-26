// Creare un componente GithubUser che riceve
//  un prop di nome utente e recupera i dati 
//  dell'utente Github corrispondente dall'API Github. 
//  Il componente deve rendere il nome, il login e l'avatar dell'utente.
// Creare un nuovo componente GithubUsers che abbia un modulo con un input
//  di testo e un pulsante di invio. L'input sarà utilizzato per cercare un 
//  utente fornendo il suo nome utente. Ogni utente sarà visualizzato in un
//   elenco, dove ogni elemento dell'elenco è un componente GithubUser.
//    Questi componenti prenderanno il nome utente come oggetto.

import { useGithubUser } from "./UseGithubUser";







export function GithubUser({ username}) {
 const { data, loading, error } = useGithubUser(username);
 
  return <div>
    <button>Load User Data</button>
    {loading && <h1>Loading...</h1>}
    {error && <h1>There has been an error</h1>}
    {data && <h1>{data.name}</h1>}
    {data && <h1>{data.login}</h1>}
    {data && <h1>{data.avatar}</h1>}
    </div>
}

// export const GithubUsers = () => {
//   const [username, setUsername] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (username) {
//       setUsers([...users, username]);
//       setUsername("");
//     }
//   };

        
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             placeholder="Inserisci nome utente"
//           />
//           <button type="submit">Cerca Utente</button>
//         </form>
//        {/* non sono riuscito a creare l'elenco */}
//       </div>
//     );
// }