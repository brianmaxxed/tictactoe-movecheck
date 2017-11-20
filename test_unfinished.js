const {X, O, e} = require('./vars')
const winSize = 4

const testBoard = [
  [O, O, O, X, O, X, X, O],
  [O, O, X, O, X, O, O, O],
  [O, O, X, X, O, O, X, O],
  [X, X, O, X, X, O, O, X],
  [O, O, X, e, X, X, X, O],
  [X, O, O, O, X, O, X, X],
  [O, X, O, O, O, X, O, O]
]

module.exports = { winSize, testBoard }
