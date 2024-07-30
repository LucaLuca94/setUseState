// Creare un componente chiamato Color che riceve come
//  prop un oggetto chiamato color, che avrà due proprietà, id e name,
//  e restituisce un tag li che visualizza la proprietà name.
// Creare un secondo componente, chiamato Colors, che riceve
//  come prop un array di oggetti, le cui proprietà sono sempre
//  name e id, e visualizza un elenco non ordinato di componenti Color.



export function Color({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <h3> {item.name} </h3>
          <h4>{item.age}</h4>
        </li>
      ))}
    </ul>
  );
}

export function Colors({ colorate }) {
  return (
    <ul>
      {colorate.map((col) => (
        <li key={col.id}>
          <h3>
           {col.id} {col.name} 
          </h3>
        </li>
      ))}
    </ul>
  );
}