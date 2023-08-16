import React from "react";

type CellProps = {
  value: number;
  onClick: (y: number, x: number) => void;
  x: number;
  y: number;
};
const Cell = ({ value, onClick, x, y }: CellProps) => {
  return (
    <button className="battleboard__cell"
      onClick={() => {
        onClick(y, x);
      }}
      type="button"
    >
      {value}
    </button>
  );
};
type BattleBoardProps = {
  matrix: number[][];
  onFire: (y: number, x:number)=>void;
};
export const BattleBoard = ({ matrix, onFire }: BattleBoardProps) => {
  return (
    <div className="battleboard">
      {matrix.map((array, y) => {
        return (
          <div className="battleboard__line" key={y}>
            {array.map((el, x) => {
              return (
                <Cell
                  key={x}
                  value={el}
                  onClick={onFire}
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
