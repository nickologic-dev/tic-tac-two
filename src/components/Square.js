import React, { useState, useEffect, useContext } from "react";
import { PlayGame } from '../GameProvider'
import { useDrop } from 'react-dnd'
import {moveCircle} from './Circle'

const Square = ({ value }) => {
  const { gameId, board, setBoard } = PlayGame();
  let rect;

  const getCircle = () => { //get dimensions
    let elem = document.getElementById(value);
    // rect = elem.getBoundingClientRect();
    moveCircle(elem)
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "circle",
    drop: getCircle,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  useEffect(() => {
    console.log("board", board);
  }, [board]);

  const onClick = () => {
    console.log("click");
    setBoard([
      ...board.slice(0,value),
      value,
      ...board.slice(value+1)
      ]
    );
  }

  return (
    <div id={value} ref={drop}>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
export default Square;