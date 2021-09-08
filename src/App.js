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