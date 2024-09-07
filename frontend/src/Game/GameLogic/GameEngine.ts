import { GameMap } from "./GameData";

class GameEngine {
  map: GameMap;

  constructor(gridSize: number) {
    this.map = new GameMap(gridSize);
  }
}
