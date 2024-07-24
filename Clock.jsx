import { useEffect, useState } from "react"

export function Clock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('setting up clock interval')
        
        const intervalId =  setInterval(() => {
          
          setDate(new Date());
        }, 1000);
        /* Sto usando la modalità rigorosa quindi ho aggiunto una funzione di pulizia */
        return (() =>  {
            console.log('Clearing interval...')
            clearInterval(intervalId);
        })
    }, [])
    return (
        <div>
            <h2>The current time is: {date.toLocaleTimeString()}</h2>
        </div>
    )
}