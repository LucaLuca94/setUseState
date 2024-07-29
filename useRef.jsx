// Creare un componente FocusableInput che rende un tag di input.
//  Non appena il componente viene visualizzato, il tag di input
//   deve essere focalizzato automaticamente.
// Utilizzando StrictMode, creare un componente con un effetto
//  che stampa un messaggio solo quando il componente viene montato
//  per la prima volta. Utilizzare un ref per
// tenere traccia del fatto che il componente sia montato o meno

import { useEffect, useRef } from "react";

export function FocusableInput() {
  const newRef = useRef(false);

  useEffect(() => {
    if (!newRef.current) {
      newRef.current = true;
      console.log("mounting firts");
    } else {
      console.log("mounted next");
    }
  }, []);

  const myInputRef = useRef(null);

  useEffect(() => {
    myInputRef.current?.focus();
  }, []);

  return <input ref={myInputRef} type="text" />;
}
