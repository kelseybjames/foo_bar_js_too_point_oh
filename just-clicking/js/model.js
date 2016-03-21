// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function(_) {
  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  var score = 0;

  var getScore = function() {
    return score;
  };

  var getSquares = function() {
    return _dataSquares;
  };

  var activateRandomSquare = function() {
    var shuffledSquares = _.shuffle([0,1,2,3,4,5,6,7,8]);
    shuffledSquares.forEach(function(index) {
      if (shuffledSquares[index] === 0) {
        _dataSquares[index] = 1;
        return index;
      };
    });
  };

  var processSquareClick = function(index) {
    console.log('test');
    if (_dataSquares[index] === 1) {
      _dataSquares[index] = 0;
      score += 10;
    }
  };

  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick
  }
})(_);
