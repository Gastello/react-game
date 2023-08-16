import React from "react";

export const ResetGameButton = ({ reset }: { reset: () => void; }) => {
  return <button className="battleboard__button" onClick={reset}>Reset a game</button>;
};
