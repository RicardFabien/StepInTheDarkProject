class GameEngine{

}

class GameMap{

    grid: Square[][];

    constructor(gridSize: number){
        // makes a bidimensionnal array filled with Square objects
        // The size of the bidimensionnal array is gridSize
        // So gridsize 3 would be a 3x3 grid
        this.grid = 
        Array.from( {length:gridSize}, ()=> {
                return Array.from({length:gridSize}, ()=> {
                   return new Square()
                })
            });
        
    }

}

class Square{
    revealedWall :{
        up:boolean,
        down:boolean,
        left: boolean,
        right: boolean
    } = {up:false,down:false, left:false, right:false}
}