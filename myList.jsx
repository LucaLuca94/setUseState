import classes from "./MyList.module.scss"

function MyListItem({ item }) {
  return(
    <li >
          <h3 className= {classes.button}> {item.name} </h3>
          <h4>{item.age}</h4>
        </li>
  )
}



export function Mylist({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <MyListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
