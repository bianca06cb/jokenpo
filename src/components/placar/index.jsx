import React from 'react';

function Placar({ placar }) {
  return (
    <div>
      <h2>Placar</h2>
      <p>Jogador: {placar.jogador}</p>
      <p>Computador: {placar.computador}</p>
    </div>
  );
}

export default Placar;
