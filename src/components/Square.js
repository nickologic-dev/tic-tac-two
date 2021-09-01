import React, { useEffect } from "react";
import { PlayGame } from '../GameProvider'
import { useDrop } from 'react-dnd'
import {moveCircle} from './Circle'

const Square = ({ value }) => {
  const { gameId, board, setBoard } = PlayGame();
  let rect;

  const updateBoard = () => { 
    let elem = document.getElementById(value);
    const circleSize = moveCircle(elem);
    setBoard([
      ...board.slice(0,value),
      circleSize,
      ...board.slice(value+1)
      ]
    );
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "circle",
    drop: updateBoard,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [board])

  useEffect(() => {
    console.log("board", board);
  }, [board]);

  return (
    <div id={value} ref={drop} className="square">

    </div>
  );
}
export default Square;