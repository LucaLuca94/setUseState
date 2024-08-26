import { useState } from "react";
export function GetData() {
  const [data, setData] = useState("");
  const [Value, setValue] = useState("");

  async function GetUser() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${Value}`
    );
    const data = await response.json()
    setData(data);
    console.log(data);
  }
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={Value} onChange={handleChangeInput} />
      <button onClick={GetUser}>Fetch Data</button>

      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
}
