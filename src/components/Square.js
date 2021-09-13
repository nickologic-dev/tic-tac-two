import React, { useEffect, useState } from "react";
import { PlayGame } from '../GameProvider'
import { useDrop } from 'react-dnd'
import Circle from "./Circle";

const Square = ({ value }) => {
  const { gameId, board, setBoard, pieces, setPieces } = PlayGame();
  const [hasPiece, setHasPiece] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "circle",
    drop: (item) => dropPiece(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [board])

  const dropPiece = (id) => {
    if (board[value] === null || id > board[value]) {
      setBoard([
        ...board.slice(0,value),
        id,
        ...board.slice(value+1)
        ]
      );
      setHasPiece(id);

      // var index = pieces.indexOf(id);
      // pieces.splice(index, 1);
      // console.log("pieces", pieces);
      // setPieces(pieces);
    }
  }

  useEffect(() => {
    // console.log("board", board);
  }, [board]);

  return (
    <div id={value} ref={drop} className="square">
      { hasPiece >= 0 ? <Circle value={ board[value] } /> : <div></div>}
    </div>
  );
}
export default Square;