import { MAX_X, MAX_Y, createArray } from "../utils/array";

export const createEmptyBattleBoard = () =>
  createArray(MAX_Y, () => createArray(MAX_X, () => 0));

export const useGameState = () => {
  const reset = () => console.log("reset");
  const turn = 0;
  const matrix = createEmptyBattleBoard();
  return { turn, reset, matrix };
};
