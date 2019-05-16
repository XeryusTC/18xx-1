import React from "react";
import Color from "../data/Color";

const Box = ({ color, width, stroke, strokeWidth }) => {
  color = color || "track";
  width = width || 50;
  stroke = stroke || "track";
  strokeWidth = strokeWidth || "2";

  return (
    <Color context="companies">
      {c => (
        <g>
          <rect
            fill={c(color)}
            stroke={c(stroke)}
            strokeWidth={strokeWidth}
            x={-0.5 * width} y={-0.5 * width}
            width={width} height={width} />
        </g>
      )}
    </Color>
  );
};

export default Box;
