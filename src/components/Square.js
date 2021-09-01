import React, { useState, useEffect, useContext } from "react";
import { PlayGame } from '../GameProvider'
import { useDrop } from 'react-dnd'
import {moveCircle} from './Circle'

const Square = ({ value }) => {
  const { gameId, board, setBoard } = PlayGame();
  let rect;

  useEffect(() => { //get dimensions
    let elem = document.getElementById(value);
    rect = elem.getBoundingClientRect();
    console.log("here", value);
    console.log("this", rect);
  }, [])

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "circle",
  //   drop: () => moveCircle(rect.x, rect.y),
  //   collect: monitor => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }), [rect.x, rect.y])

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

    <div id={value} >
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
export default Square;