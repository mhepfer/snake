(function (){ 
  
  if(typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }
  
  var View = SnakeGame.View = function(board, $el) {
    this.board = board;
    this.$el = $el;
    this.render();
    this.addSnake();
    this.bindEvents();
    setInterval(this.step.bind(this), 500);
  };
  
  View.prototype.bindEvents = function() {
    $(document).on("keydown", this.handleKeyEvent.bind(this));
  };
  
 View.KEYDIRECTIONS = { 37: "W", 38: "N", 39: "E", 40: "S" };
  
  View.prototype.handleKeyEvent = function(event) {

    var rawDirection = event.keyCode;
    var dir = View.KEYDIRECTIONS[rawDirection];
    if(dir){
      this.board.snake.turn(dir);
    }
  };
  
  View.prototype.render = function() {
    var boardString = "";
    for(var r = 0; r < 20; r++){
      boardString += "<div class=row data-rownum=" + r + ">";
      for(var c = 0; c < 20; c++){
        boardString +="<div class=cell data-cellpos=" + [r, c] + "></div>";
      }
      boardString += "</div>";
    }
    
    return this.$el.html(boardString);
  };
  
  View.prototype.addSnake = function() {
    var segments = this.board.snake.segments;
    for(var i = 0; i < segments.length; i ++){
      var segmentString = segments[i].toString(); 
      var tag = $('[data-cellpos="' + segmentString + '"]')
      tag.addClass('snake')
    }
  };
  
  View.prototype.step = function() {
    this.board.snake.move();
    this.render(); 
  };
  
})();