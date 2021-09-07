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
    <div id={`circle-${value}`} ref={drag} className={`circle size-${value}`}>

    </div>
  );
}
export default Circle;

export function moveCircle(square) {
  let circle = document.getElementById("circle-3");
  square.appendChild(circle);
  return 0;
}
