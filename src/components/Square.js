import React, { useEffect, useState } from "react";
import { PlayGame } from '../GameProvider'
import { useDrop } from 'react-dnd'
import Circle from "./Circle";

const Square = ({ value }) => {
  const { gameId, board, setBoard } = PlayGame();
  const [hasPiece, setHasPiece] = useState();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "circle",
    drop: (item) => dropPiece(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [board])

  const dropPiece = (id) => {
    setBoard([
      ...board.slice(0,value),
      id,
      ...board.slice(value+1)
      ]
    );
    setHasPiece(id);
  }

  useEffect(() => {
    console.log("board", board);
  }, [board]);

  return (
    <div id={value} ref={drop} className="square">
      { hasPiece ? <Circle value={board[value]} /> : <></>}
    </div>
  );
}
export default Square;