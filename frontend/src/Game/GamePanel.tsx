import React, { useState } from "react";
import GameMap from "./GameLogic/GameMap";

function GamePanel() {
  var [map, setMap] = useState(new GameMap());

  if (map == null) {
    return <div>{"Nothing yet :("}</div>;
  }

  var rows = [];

  for (var row of map.grid) {
    var renderRow = [];
    for (var sqr of row) {
      renderRow.push(<Square>{sqr}</Square>);
    }
    rows.push(<Row>{renderRow}</Row>);
  }

  return <div>{rows}</div>;
}

function Row(props: any) {
  return <div className={"Row"}>{props.children}</div>;
}

function Square(props: any) {
  return <div className={"Square"}></div>;
}

export default GamePanel;
