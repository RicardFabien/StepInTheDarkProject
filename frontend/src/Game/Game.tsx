import React from "react";
import GameController from "./GameController";

function Game() {

    return (
        <div className="Game">
            <div className="Board" style={{
                "backgroundColor":"blue"
            }}>

            </div>
            <GameController/>
        </div>
    )
        
}

export default Game;