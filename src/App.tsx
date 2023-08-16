import React from "react";
import "./App.css";
import { PlayerMoves } from "./PlayerMoves";
import { ResetGameButton } from "./ResetGameButton";
import { BattleBoard } from "./BattleBoard";
import { useGameState } from "./state/useGameState";

function App() {
  const {turn, reset, matrix} = useGameState() 
  return (
    <div className="App">
      <PlayerMoves turn={turn} />
      <BattleBoard matrix={matrix} />
      <ResetGameButton reset={reset}/>
    </div>
  );
}
export default App;