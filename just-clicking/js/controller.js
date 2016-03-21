// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(model, view) {
  var currentIndex;
  

  var clickListener = function(game) {
    game.click('.square', function(e) {
      var squareIndex = $(this).attr('data-id');
      model.processSquareClick(squareIndex);
      var dataSquares = model.getSquares();
      var score = model.getScore();
      view.updateSquares(dataSquares);
      view.updateScore(score);
    })
  };

  var gameLoop = function() {
    model.activateRandomSquare();
    view.updateSquares(model.getSquares());
  };

  var init = function() {
    view.init(clickListener);
    setInterval(gameLoop, 1000);
  };

  return {
    init: init
  }
})(JC.model, JC.view);


