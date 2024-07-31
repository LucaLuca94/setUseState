import { useState } from "react"

export function Change() {
    const [data, setData] = useState(true)
    const changing = () => setData(prev => !prev)
    return (
      <div>
        {data && <p>"Please Login"</p>}
        <button onClick={changing}> {data ? "Login" : "Logout"}</button>
      </div>
    );
}