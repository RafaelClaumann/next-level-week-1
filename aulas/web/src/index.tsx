import React from 'react';
import ReactDOM from 'react-dom';
import HeaderExample from './HeaderExample';

ReactDOM.render(
  <React.StrictMode>
    <HeaderExample nome='Rafael' sobrenome='Claumann' />
  </React.StrictMode>,
  document.getElementById('root')
);
