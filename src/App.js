import './App.css';
import React, { Component } from 'react'
import Login from './components/Login';
import Board from './components/Board'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>

  );
}

export default App;

// {gameId === null ? <Login setGameId={setGameId}/> : <div></div>}