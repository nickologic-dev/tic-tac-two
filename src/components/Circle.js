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
    <div id="circle" ref={drag}>
      <button>circle</button>
    </div>
  );
}
export default Circle;

export function moveCircle(square) {
  let circle = document.getElementById("circle");
  square.appendChild(circle);
}