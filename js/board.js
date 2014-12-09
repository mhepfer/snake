

(function (){

  if(typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }

  var Board = SnakeGame.Board = function (snake){
    this.snake = snake;
    this.grid = this.makeGrid()
  }

  Board.prototype.makeGrid = function(){

    var newGrid = [];
    for(var r = 0; r < 20; r++){
      newGrid.push([]);
      for(var c = 0; c < 20; c++){
        newGrid[r].push([]);
      }
    }

    this.grid = newGrid;
  }

  Board.prototype.render = function(){

    var boardString = ""
    for(var r = 0; r < this.grid.length; r++){
      for(var c = 0; c < this.grid.length; c++){
        boardString += ".";
      }
      boardString += "/n";
    }
  }

})();