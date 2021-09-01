import React, { useState, useEffect, useContext } from "react";
import Square from "./Square"
import { PlayGame } from '../GameProvider'
import Circle from "./Circle";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Board = () => {
    const [player, setPlayer] = useState(1); 
    const { gameId, board, setBoard } = PlayGame();

  useEffect(() => {
    if (isWinner()) {
      console.log("winnder winnder chicken dinner")
    } else {
      if (player === 0) {
        setPlayer(1);
      } else {
        setPlayer(0);
      }
    }
  }, [board]);

  const isWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[0+i] === board[1+i] && board[1+i] === board[2+i] && board[0+i] !== null) {
        return true;
      }
      if (board[0+i] === board[3+i] && board[3+i] === board[6+i] && board[6+i] !== null) {
        return true;
      }
    }
    if (board[0] === board[4] && board[4] === board[8] && board[8] != null) {
      return true;
    }
    if (board[2] === board[4] && board[4] === board[6] && board[6] != null) {
      return true;
    }
    return false
  }

  const isPlayerOne = (value) => {
    return value > 0 && value < 6;
  }

  return (
    <div>
    <DndProvider backend={HTML5Backend}>
      <div>next player: p{player}</div>
        <div className="board-row">
          <Square value={0} />
          <Square value={1} />
          <Square value={2} />
        </div>
        <div className="board-row">
          <Square value={3} />
          <Square value={4} />
          <Square value={5} />
        </div>
        <div className="board-row">
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
        </div>
        <Circle value={0}/>
        </DndProvider>
      </div>
  );
}
export default Board;
