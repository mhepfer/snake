(function (){
  if(typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }
  
  var Snake = SnakeGame.Snake = function (){
    this.dir = "E";
    this.segments = [[0,0]];
  };
  
  Snake.DIRECTIONS = { "N":[0,1], "E": [1,0], "S": [0, -1], "W": [-1, 0]};
  
  Snake.prototype.move = function(){
   var that = this;
   var newSegments = [];
   console.log(this.segments);
   this.segments.forEach(function(segment){
     newSegments = newSegments.push(that.plus(segment, that.dir));
   });
  
   this.segments = newSegments; 
  }
  
  Snake.prototype.turn = function(newDir){
    this.dir = newDir;
  }
  
  Snake.prototype.plus = function(pos, direction){
    var array = Snake.DIRECTIONS[direction];
    var newX = pos[0] + array[0];
    var newY = pos[1] + array[1];
    return [newX, newY];
  }
  
})();
  
  