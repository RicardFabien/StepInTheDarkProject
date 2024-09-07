class GameMap {
  grid: SquareData[][];

  constructor(gridSize: number = 3) {
    // makes a bidimensionnal array filled with Square objects
    // The size of the bidimensionnal array is gridSize
    // So gridsize 3 would be a 3x3 grid
    this.grid = Array.from({ length: gridSize }, () => {
      return Array.from({ length: gridSize }, () => {
        return new SquareData();
      });
    });
  }
}

class SquareData {
  userAvatars: UserAvatar[] = [];

  revealedWall: {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
  } = { up: false, down: false, left: false, right: false };
  // When the player move it leaves tracks
  // Track appears when the player move between 2 squares (and doesn't die),
  // They go from origin square to target square
  // If a player goes from a to b and b is to the right, Right is true for a and Left is true for b
  tracks: {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
  } = { up: false, down: false, left: false, right: false };
}

class UserAvatar {
  coordinate: [number, number] = [0, 0];
  name: string = "default";
}

export { GameMap, SquareData, UserAvatar };
