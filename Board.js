const {winSize,testBoard} = require('./test_board')
const MoveCheck = require('./MoveCheck.js')
const X = 'X'
const O = 'O'
const EMPTY = '-'

class Board {
  constructor() {
    const {
      data,
      gridX,
      gridY
    } = this.importTestBoard()
    console.log(data)
    this.positionsChecked = []
    this.board = {
      data,
      gridX,
      gridY,
      winSize,
    }
  }

  static get X() {
    return X
  }

  static get O() {
    return O
  }

  checkBoard(player) {
    let position
    let len = this.board.data.length

    for (position = 0; position < len; position++) {
      if (this.board.data[position] === player) {
        for (let type in MoveCheck.types) {
          let check = this.checkForWin(new MoveCheck(player, this.board,
            MoveCheck.types[type], position))

          if (check.won) {
            console.log(`${player} Won!`)
            console.dir(check, {
              depth: null,
              colors: true
            })
            return check
          }
        }
      }
    }
  }

  checkForWin(check) {
    if (!this.inBounds(check)) {
      return check
    }

    const {
      x,
      y
    } = check.updateCoordinates(this.board.gridX)
    if (check.hasWon()) {
      return check
    }

    if (!check.validateNext(x, y)) {
      return check
    }

    return this.checkForWin(check)
  }

  inBounds(check) {
    if (check.position > this.board.data.length ||
      this.board.data[check.position] !== check.player) {
      return false
    }

    return true
  }

  importTestBoard() {
    let i = 0
    let gridY = testBoard.length
    let gridX = testBoard[0].length
    let data = ''
    for (let row of testBoard) {
      for (let col of row) {
        data += (col && col.length === 1 &&
          (col === X || col === O)) ? col.toUpperCase() : EMPTY
      }
    }

    return {
      data,
      gridX,
      gridY
    }
  }

  displayGrid() {
    let output = `[\r\n`
    for (let i = 0; i < this.board.data.length; i += this.board.gridX) {
      output += `\t[`
      for (let j = 0; j < this.board.gridX; j++) {
        let comma = (j < this.board.gridX - 1) ? ',' : ''

        output += `${this.board.data.substr(j + i, 1)}${comma}`
      }
      output += `]\r\n`

    }
    output += `\r\n]\r\n`

    console.log(output)
  }
}

module.exports = Board
