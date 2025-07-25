import { useState } from "react";
import Home from "../home/Home";

function Login() {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            {
                isLogged ? (
                    <Home
                        titulo="Componente Home"
                        texto="Bem-vindo de Volta!"
                    />
                ) : (
                    <div>
                        <h2>Componente Login</h2>
                        <button onClick={() => setIsLogged(true)}>Entrar</button>
                    </div>
                )
            }
        </>
    )
}

export default Login


/* useState (linha 6) cria o estado inicial da variável isLogged como false.
   setIsLogged é a função que altera esse valor. */

/* O onClick chama uma arrow function que, quando executada,
   altera o estado com setIsLogged(true) (linha 19). */

/* setIsLogged(true) atualiza o valor de isLogged para true.
   Isso faz o componente re-renderizar (desconstruir a const) com base no novo estado. */

/* A renderização condicional com isLogged ? e :  funciona
   como um if/else: se isLogged for true, mostra <Home />, senão
   mostra o conteúdo de login (linhas 13 a 20). */
