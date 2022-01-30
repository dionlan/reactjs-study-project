import React, {useState, useEffect} from "react";

export default function ExampleEffect001(){
    const [counter, setCounter] = useState(0);

    /**
     * recebe dois parâmetros. O Primeiro é uma função do tipo arrow function, o segundo é um array de parâmetros.
     * 1º parâmetro = o que a função vai executar. 
     * 2º quando a função vai executar. Executa apenas quando algum dos valores dos parâmetros (dependências / variáveis) do array é alterado.
     * Array [] vazio = didMount = executa apenas uma vez
     * Array [var_1] = executa toda vez que a variável var_1 for alterada.
     */
    useEffect(() => {
        document.title = counter; 
    }, [counter]); // executa apenas uma vez com [] vazio; 

    return(
        <>
            <h1> {counter} </h1>
            <div>
                <button onClick={() => setCounter(counter + 1)} > Add </button>
            </div>
        </>
    )
}