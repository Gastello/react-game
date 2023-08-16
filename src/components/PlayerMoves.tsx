import React from "react";

export const PlayerMoves = ({ turn }: { turn: number; }) => {
  return <div className="moves">Moves: {turn}</div>;
};
