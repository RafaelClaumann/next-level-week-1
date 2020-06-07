// Este arquivo serve apenas para estudo dos componentes com Typescript.
// Não deve ser levado em consideração e provavelmente será deletado.
import React, { useState } from 'react'

interface HeaderExampleProps {
  nome: string  // parametro obrigatorio
  sobrenome?: string  // parametro opcional
}

const HeaderExample: React.FC<HeaderExampleProps> = (props) => {
  //props = {nome: 'nome', sobrenome: 'sobrenome'}

  // ESTADO: Informações mantidas pelo próprio componente.
  // useState retorna um array com o valor inicial do estado e funcao para atualizar
  const [counter, setCounter] = useState<number>(0);

  function handleCounter() {
    // IMUTABILIDADE: Não é possivel alterar o valor de um estado diretamente.
    // counter++, counter = counter + 1, isso não funciona.
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>{props.nome} {props.sobrenome}</h1>
      <h2>counter: {counter}</h2>
      <button type="button" onClick={handleCounter}>Incrementar</button>
    </>
  );
}

export default HeaderExample
