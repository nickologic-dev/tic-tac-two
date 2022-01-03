import React, { } from "react";
import { useDrag } from 'react-dnd'
import { PlayGame } from '../GameProvider'

const Circle = ( {value} ) => {
  const { player, currentPlayer } = PlayGame();

  const [{isDragging}, drag] = useDrag(() => ({
    type: "circle",
    item: {id: value},
    canDrag: player == currentPlayer, // checks that it's their turn before moving piece 
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div id={`circle-${value}`} ref={drag} className={`circle size-${value} circle_p${value < 6 ? 0 : 1}`}>
      { value != null && player == 1 ? value + 6 : value }
    </div>
  );
}
export default Circle;