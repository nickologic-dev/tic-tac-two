import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Login from './components/Login';
import { useState } from "react";
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