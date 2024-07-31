import React from "react";
import GameController from "./GameController";
import GamePanel from "./GamePanel";

function Game() {
  return (
    <div className="Game">
      <div
        className="Board"
        style={{
          backgroundColor: "blue",
        }}
      >
        <GamePanel />
      </div>
      <GameController />
    </div>
  );
}

export default Game;
