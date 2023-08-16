import React from "react";
import "./App.css";
import { PlayerMoves } from "./components/PlayerMoves";
import { ResetGameButton } from "./components/ResetGameButton";
import { BattleBoard } from "./components/BattleBoard";
import { useGameState } from "./state/useGameState";

function App() {
  const {turn, reset, matrix} = useGameState();
  const onFire = (y:number,x:number) => console.log(y,x);
  return (
    <div className="App">
      <PlayerMoves turn={turn} />
      <BattleBoard matrix={matrix} onFire={onFire}/>
      <ResetGameButton reset={reset}/>
    </div>
  );
}
export default App;