import React from "react";

export const ResetGameButton = ({ reset }: { reset: () => void; }) => {
  return <button onClick={reset}>Reset a game</button>;
};
