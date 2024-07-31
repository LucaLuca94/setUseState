// Creare un componente Container che renda i suoi 
// figli all'interno di un tag div.
// Il tag div deve avere uno sfondo bianco e un
//  bordo rosso.
// Aggiungere un oggetto titolo che contenga il
//  valore del titolo da visualizzare prima dei figli.
// Rendere il contenitore pieghevole, in modo che 
// quando si clicca sul titolo i figli vengano nascosti
//  o mostrati di nuovo.
// Utilizzare il gancio useState per tenere traccia dello 
// stato collassato.



import { useState } from "react";
export function Container( {title, children} ) {
    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse() {
        setCollapsed(t => !t)
    }
    return (
      <div className="container">
        <div className="app-title">{title} <button onClick={handleToggleCollapse}>Toggle</button></div>
         {!collapsed && <div className= "app-component">{children}</div>}
      </div>
    );
}