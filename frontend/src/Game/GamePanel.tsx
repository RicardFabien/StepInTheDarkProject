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
  const revealedWall = props.children.revealedWall;
  const tracks = props.children.tracks;

  var quarterSquareStyle = squarePartStyle;

  var div1Style,
    div2Style,
    div3Style,
    div4Style: {} = quarterSquareStyle;

  // If the flag for the track is true, add a border that represent that tracks
  // If tracks.down is true, a bottom track will be shown
  // If tracks.left is false, the left track will NOT be shown
  if (tracks.up) div1Style = { ...quarterSquareStyle, borderRight: "solid" };
  if (tracks.right)
    div2Style = { ...quarterSquareStyle, borderBottom: "solid" };
  if (tracks.left) div3Style = { ...quarterSquareStyle, borderTop: "solid" };
  if (tracks.down) div4Style = { ...quarterSquareStyle, borderLeft: "solid" };

  return (
    <div className={"Square"} style={containerStyle}>
      <div style={div1Style}></div>
      <div style={div2Style}></div>
      <div style={div3Style}></div>
      <div style={div4Style}></div>
    </div>
  );
}

export default GamePanel;
