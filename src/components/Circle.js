import React, { } from "react";
import { useDrag } from 'react-dnd'
import { PlayGame } from '../GameProvider'

const Circle = ( {value} ) => {
  const { player } = PlayGame();

  const [{isDragging}, drag] = useDrag(() => ({
    type: "circle",
    item: {id: value},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div id={`circle-${value}`} ref={drag} className={`circle size-${value} circle_p${player}`}>
      {value}
    </div>
  );
}
export default Circle;