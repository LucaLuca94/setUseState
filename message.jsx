export function Message(age) {
    return (
      <>
        {age > 18 ? <p>You are {age} years old</p> : <p>Sei molto giovane!</p>}
      </>
    );
}