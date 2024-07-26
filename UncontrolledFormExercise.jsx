// Creare un componente non controllato chiamato
// UncontrolledLogin, contenente
// tre input: un input per il nome
//  utente, un input per la password
//  e una casella di controllo Ricorda.
//  Aggiungere un pulsante “login” al componente Login.
// Quando si fa clic, il gestore di eventi collegato al
// pulsante deve richiamare una funzione onLogin che stampa i
//  valori degli input.
// Tentare di accedere ai valori del modulo utilizzando l'API DOM,
//  leggendo l'event.target del gestore dell'evento onSubmit.
// Aggiungere un secondo pulsante che richiami una funzione
// loginWithFormData che stampi i valori degli input utilizzando l'API FormData.

export function UncontrolledLogin({ onLogin, loginWithFormData }) {
  function printValueForm(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const session = event.target.elements.session.checked;

    onLogin({
      username,
      password,
      session,
    });

    function handleFormData(event) {
      event.preventDefault();

      const formData = new FormData(event.target.value);

      loginWithFormData(formData);
    }
  }

  return (
    <form onSubmit={printValueForm}>
      <input name="username" type="text" placeholder="Insert the username" />
      <input
        name="password"
        type="password"
        placeholder="Insert the password"
      />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="button">Login with FormData</button>
    </form>
  );
}
