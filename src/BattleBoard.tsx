import React from "react";

type CellProps = {
  value: number;
  onClick: (y: number, x: number) => void;
  x: number;
  y: number;
};
const Cell = ({ value, onClick, x, y }: CellProps) => {
  return (
    <button
      onClick={() => {
        onClick(x, y);
      }}
      type="button"
    >
      {value}
    </button>
  );
};
type BattleBoardProps = {
  matrix: number[][];
};
export const BattleBoard = ({ matrix }: BattleBoardProps) => {
  return (
    <div>
      {matrix.map((array, y) => {
        return (
          <div key={y}>
            {array.map((el, x) => {
              return (
                <Cell
                  key={x}
                  value={el}
                  onClick={(y, x) => {
                    console.log(`${x}${y} clicked!`);
                  }}
                  x={x}
                  y={y}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
