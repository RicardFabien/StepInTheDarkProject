import GameMap from "./GameMap";

class GameEngine {
  map: GameMap;

  constructor(gridSize: number) {
    this.map = new GameMap(gridSize);
  }
}
