import React, { } from "react";
import { useDrag } from 'react-dnd'

const Circle = ( {value} ) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "circle",
    item: {id: value},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div id={`circle-${value}`} ref={drag} className={`circle size-${value}`}>
      {value}
    </div>
  );
}
export default Circle;