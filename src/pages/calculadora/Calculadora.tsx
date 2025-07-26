import { useState } from "react";


function Calculadora () {
    const [contador, setContador] = useState (0)
    const [a, setA] = useState (0)
    const [b, setB] = useState (0)
    const [resultado, setResultado] = useState (0)

    function Colocar () {
        setContador (contador + 1)
    }

    function Tirar () {
        setContador (contador - 1)
    }

    function A () {
        setA (contador)
    }

    function B () {
        setB (contador)
    }

    function Resultado () {
        setResultado (a + b)
    }

    return (
        <>
        <div>
            <h1>Escolha um número: {contador} </h1>
            <button onClick = {Colocar} > Adicionar + 1 </button>
            <button onClick = {Tirar} > Tirar 1 </button>
        </div>
        

        <div>
            <h2>Número A = {a} </h2>
            <button onClick = {A} > Salvar valor no A </button>
        </div>


        <div>
            <h2>Número B = {b} </h2>
            <button onClick = {B} > Salvar valor no B</button>
        </div>


        <div>
            <button onClick = {Resultado} > Resultado</button>
            <h3>O resultado é: {resultado} </h3>
        </div>
        </>
    )
}

export default Calculadora
