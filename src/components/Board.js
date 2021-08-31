import React, { useState, useEffect } from "react";
import Square from "./Square"

const Board = () => {
  //git issue
    const [board, setBoard] = useState(Array(9).fill(null)); //0-5 is p1, 6-11 is p2
    const [player, setPlayer] = useState(1); 

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
      <div>next player: p{player}</div>
        <div className="board-row">
          <Square value={0} board={board} setBoard={setBoard} />
          <Square value={1} board={board} setBoard={setBoard}/>
          <Square value={2} board={board} setBoard={setBoard}/>
        </div>
        <div className="board-row">
          <Square value={3} board={board} setBoard={setBoard}/>
          <Square value={4} board={board} setBoard={setBoard}/>
          <Square value={5} board={board} setBoard={setBoard}/>
        </div>
        <div className="board-row">
          <Square value={6} board={board} setBoard={setBoard}/>
          <Square value={7} board={board} setBoard={setBoard}/>
          <Square value={8} board={board} setBoard={setBoard}/>
        </div>
      </div>
  );
}
export default Board;
