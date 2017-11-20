const MoveCheckTypes = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  DIAGONAL_LEFT: 'diagonal left',
  DIAGONAL_RIGHT: 'diagonal right',
}

class MoveCheck {
  constructor(player = null, board = null, type = null,
    position = null, depth = 0, moves = []) {

    if (player === null || type === null || position === null) {
      throw new Error('invalid MoveCheck.')
    }
    this.player = player
    this.board = board
    this.type = type
    this.position = position
    this.depth = depth
    this.moves = moves
    this.coords = []
    this.won = false
    this.tie = false

    return this
  }

  hasWon() {
    if (this.moves.length >= this.board.winSize) {
      this.won = true
      return this.won
    }
  }

  updateCoordinates(gridX) {
    let x = this.position % gridX
    let y = (Math.floor(this.position / gridX))

    this.moves.push(this.position)
    this.coords.push(`(${x}, ${y})`)
    this.depth++

    return {x,y}
  }

  validateNext(x, y) {
    switch (this.type) {
      case MoveCheck.types.HORIZONTAL:
        if (x >= this.board.gridX - 1) {
          return false
        }
        this.position += 1
        return true

      case MoveCheck.types.VERTICAL:
        if (y >= this.board.gridY - 1) {
          return false
        }

        this.position += this.board.gridX
        return true

      case MoveCheck.types.DIAGONAL_LEFT:
        if (y >= this.board.gridY - 1 || x <= 0) {
          return false
        }

        this.position += this.board.gridX - 1
        return true

      case MoveCheck.types.DIAGONAL_RIGHT:
        if (y >= this.board.gridY - 1 || x <= 0) {
          return false
        }

        this.position += this.board.gridX - 1
        return true

      default:
        return false
    }
  }

  static get types() {
    return MoveCheckTypes
  }
}

module.exports = MoveCheck
