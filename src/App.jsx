import './App.css'
import React, { useState } from 'react';
import Jogo from './components/jogo';
import Resultado from './components/resultado';
import Placar from './components/placar';

function App() {
  const [placar, setPlacar] = useState({ jogador: 0, computador: 0, empates: 0 });

  const atualizarPlacar = (vencedor) => {
    setPlacar((placarAnterior) => ({
      ...placarAnterior,
      [vencedor]: placarAnterior[vencedor] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Jogo Pedra, Papel, Tesoura</h1>
      <Jogo atualizarPlacar={atualizarPlacar} />
      <Resultado placar={placar} />
      <Placar placar={placar} />
    </div>
  );
}

export default App;
