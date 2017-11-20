const Board = require('./Board')

const board = new Board()
board.displayGrid()
if (board.checkBoard(Board.X)) {

} else if (board.checkBoard(Board.O)) {

} else {
  if (board.isFilled()) {
    
  }
}
