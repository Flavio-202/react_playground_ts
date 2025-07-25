import {useState, useEffect} from "react";

function Tarefa (){

  const [completed, setCompleted] = useState (false);
  const [tarefa, setTarefa] = useState ('');

  useEffect(()=> {
    if (completed) {
      setTarefa ('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted (true)}>Concluir Tarefa</button>
    </div>
  )
}

export default Tarefa


/* Linha 5: useState cria o estado "completed" com valor inicial false.
   "setCompleted" é a função usada para mudar esse valor. */

/* Linha 19: Quando o usuário clicar no botão, a arrow function será executada.
   Ela chama setCompleted(true), atualizando o estado para verdadeiro. */

/* "setCompleted(true)" muda o valor de "completed" para true.
   Isso dispara o useEffect porque estamos observando "completed". */

/* Linha 8: useEffect é uma função do React que roda após renderizações (atualizações, nesse caso na completed).
   Ele é configurado para reagir apenas quando "completed" mudar (linha 12). 
   Se completed sofre alteração, passar a ser true, o useEffect executa setTarefa com a mensagem da linha 10. */


/* O useEffect é executado sempre que o valor de "completed" mudar, porque ele está listado no array de dependências [completed] (linha 12).

   No entanto, se a gente quiser que uma ação (como mostrar a mensagem "Parabéns!") aconteça apenas quando "completed" for true,
   é importante usar um if (completed) dentro do useEffect.

   Sem o if, o código dentro do useEffect rodaria também quando "completed" for false, o que pode causar comportamentos indesejados
   
   (como apagar ou sobrescrever a mensagem sem necessidade, se o estado mudar de volta para false futuramente).

   Ou seja, o if garante que a ação só será executada quando completed for exatamente true. */


