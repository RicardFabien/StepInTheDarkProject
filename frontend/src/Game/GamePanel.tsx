import React from "react";

function GamePanel() {
  var map: GameMap | null = null;

  if (map == null || map == undefined) {
    return <div>{"Nothing yet :("}</div>;
  }

  return;
}

function Row() {
  return <div></div>;
}

function Square() {
  return <div></div>;
}

export default GamePanel;
