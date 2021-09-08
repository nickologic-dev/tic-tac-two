import './App.css';
import React, { Component } from 'react'
import Login from './components/Login';
import Board from './components/Board'
import { PlayGame } from './GameProvider'

function App() {
  const { gameId } = PlayGame();

  return (
    <div className="App">
      <header className="App-header">
        {gameId === null ? <Login /> : <Board />}
      </header>
    </div>

  );
}

export default App;

/* TODO: 
    - make 1 of each player piece (infinite right now)
    - make other player have pieces
    - make random code generate for a new game
    - host on github pages
    - adjust win condition for size pieces 
    - test with two players 
    - make it not ugly 
*/