// Este arquivo serve apenas para estudo dos componentes com Typescript.
// Não deve ser levado em consideração e provavelmente será deletado.
import React from 'react'

interface HeaderExampleProps {
  nome: string  // parametro obrigatorio
  sobrenome?: string  // parametro opcional
}

const HeaderExample: React.FC<HeaderExampleProps> = (props) => {
  //props = {nome: 'nome', sobrenome: 'sobrenome'}
  return (
    <h1>{props.nome} {props.sobrenome}</h1>
  );
}

export default HeaderExample
