import React, { useState } from "react";
import GameMap from "./GameLogic/GameMap";

function GamePanel() {
  var [map, setMap] = useState(new GameMap(2));

  map.grid[0][0].revealedWall.up = true;
  map.grid[0][1].revealedWall.left = true;
  map.grid[0][1].tracks.up = true;
  map.grid[0][1].tracks.left = true;

  map.grid[1][0].tracks.down = true;
  map.grid[1][1].tracks.left = true;

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

// const containerStyle = {
//   display: "flex",
//   alignItems: "left",
//   "flex-wrap": "wrap",
// };

const containerStyle = {
  display: "grid",
  "grid-template-columns": "50% 50%",
  "grid-template-rows": "50% 50%",
};

const squarePartStyle = {
  // width: "50%",
  // height: "50%",
};

function Square(props: any) {
  const revealedWall = { left: true, down: true, right: true, up: true };
  //props.children.revealedWall;

  const tracks = props.children.tracks;

  return (
    <div className={"Square"} style={containerStyle}>
      <div
        style={
          revealedWall.up
            ? { ...squarePartStyle, borderRight: "solid" }
            : squarePartStyle
        }
      ></div>
      <div
        style={
          revealedWall.right
            ? { ...squarePartStyle, borderBottom: "solid" }
            : squarePartStyle
        }
      ></div>
      <div
        style={
          revealedWall.left
            ? { ...squarePartStyle, borderTop: "solid" }
            : squarePartStyle
        }
      ></div>
      <div
        style={
          revealedWall.down
            ? { ...squarePartStyle, borderLeft: "solid" }
            : squarePartStyle
        }
      ></div>
    </div>
  );
}

export default GamePanel;
