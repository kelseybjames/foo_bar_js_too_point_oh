// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function($) {
  var $game = $('#game');
  var $squares = $('.square');
  var $score = $('#score');
  var squareIndex;

  var init = function(onClick) {
    setUpBoard();
    setUpListener();
    onClick($game);
  };

  var setUpListener = function() {
    $game.click('.square', function(e) {
      squareIndex = e.target.getAttribute('data-id');
      console.log(squareIndex);
      return squareIndex;
    })
  };

  var setUpBoard = function() {
    $squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });
  };

  var updateSquares = function(dataSquares) {
    for (i=0; i<dataSquares.length; i++) {
      if (dataSquares[i] === 1) {
        var $square = $squares.eq(i);
        $square.addClass('active');
      };
    };
  };

  var updateScore = function(points) {
    $score.text(points);
  };

  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
    squareIndex: squareIndex
  }

})($);

