const {X, O, e} = require('./vars')
const winSize = 4

const testBoard = [
  [O, O, O, e, e, e, e, e],
  [O, O, e, e, e, O, O, O],
  [O, e, X, X, e, e, e, O],
  [e, e, e, O, X, e, O, e],
  [e, e, e, O, e, e, e, e],
  [e, O, e, O, e, O, X, e],
  [O, e, e, O, e, e, O, O]
]

module.exports = { winSize, testBoard }
