// Creare un componente di funzione Hello che renda il messaggio
//  "Hello, World!" all'interno di un tag h2. Creare un LanguageContext
//  e avvolgere il componente Hello nel suo provider. Aggiungere un tag select
//   al componente in cui è reso il componente Hello, che consenta all'utente
//   di selezionare la lingua e passarla come valore al provider.
// Consumare il LanguageContext all'interno del componente Hello, utilizzando
//  l'hook useContext, e mostrare il messaggio "Hello, World!" nella lingua corretta.




import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"







export function Hello () {
    const Language = useContext(LanguageContext);
  return (

      <h2>{Language === "italiano" ? "Ciao, Mondo!" : "Hello, World!"}</h2>
  )
}

