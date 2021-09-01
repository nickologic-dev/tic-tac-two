import React, { } from "react";
import { useDrag } from 'react-dnd'

const Circle = ( {value} ) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "circle",
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div id={`circle-${value}`} ref={drag}>
      <button>circle</button>
    </div>
  );
}
export default Circle;

export function moveCircle(x, y) {
  // let elem = document.getElementById(`circle-${value}`);
  // elem.style.top = y + "px";
  // elem.style.left = x + "px";
}