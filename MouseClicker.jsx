export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }
    function handleImageClick(event) {
      console.log(event.target.src)
      /* evitare che l'attributo name del pulsante venga stampato nella console 
      quando si fa clic sull'immagine posso usare la proprietà stopPropagation */
      event.stopPropagation();
    }
  return (
    <div>
      <button name='one' onClick={handleButtonClick}>
        Click me
      </button>
      <button name='two' onClick={handleButtonClick}>
       <img src="#" alt="#" width={30} height={30}/>
        Click me
      </button>
    </div>
  );
}
