import React from 'react';

function Resultado({ placar }) {
  return (
    <div>
      <h2>Resultado</h2>
      <p>Jogador: {placar.jogador}</p>
      <p>Computador: {placar.computador}</p>
      <p>Empates: {placar.empates}</p>
    </div>
  );
}

export default Resultado;
