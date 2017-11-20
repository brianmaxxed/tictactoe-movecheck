# tictactoe-movecheck

This is a **simple** RECURSIVE ES6 Node.js JavaScript program that will check for a winner of a tic-tac-toe game based on the current setup of the board.
You can create a grid of any size and have an uneven grid height and width. You can even set the number of consecutive letters needed for a win! So, think Super Connect 4 :) You could conceivably make a 400x500 grid and require 100 consecutive X's or O's to win, and eventually scale more and take on the WOPR from the 80's WarGames film :)

It's RECURSIVE, so it's light on it's feet and fast. The recursion depth will stop when a non-consecutive player character is found in the direction it is checking (horizontal, vertical, and diagonal!

# What's special about this tic-tac-toe board?

Well, it's a simple ES6 object-oriented example where you can input a 2 dimensional array and process the moves as a one dimensional string, and I think it shows a good understanding of how to manipulate an array of data quickly and easily.
With a one dimensional array it is easy to process the board to check for a win, loss, or tie. The algorithm will move left to right in the array of characters and look for conditions of a win very fast. You never have to check back to the left, you only have to check forward in the array to the right.

There are also only 4 possible combination checks: horizontal, vertical, diagonal left, and diagonal right, and you merely loop once over the array.

It is easy to compute the consecutive winning letters and you can immediately stop checking a particular combination once you no longer have the same player letter that you are looking for.

# Object-oriented ES6 JavaScript

There are only a few files.

**Board.js** is the board class. here you can import the test_board.js, display the grid, or check the board for a win or tie.

**MoveCheck.js** manges the move checking process and is instanciated by Board.js. The code is nice and clean and easy to follow. The main logic is in the validateNext function where the code will validate a horizontal, vertical, diagonal left or diagonal right direction. 

Essentially, a horizontal move checks 4 sequential characters in the string. This could have been a simple indexOf('XXXX'), for example. 

A vertical or diagonal move is essentially the same thing. Instead of moving through a step of gridX characters for a vertical match, the code will navigate gridX - 1 or gridX + 1 to simulate a diagonal check to the left and right :)

The **vars.js** file merely establishes X, O and e as the constants for creating test boards. 

# How can we make the code better?
Well, finishing the game would be nice. :) I'll implement a Computer AI and check for different player turns.

Also, to make the algorithm even faster we could store indexes of already checked positions, but I didn't take it that far yet.

# Grab the source code
clone the repo:
```git clone git@github.com:briansizelr/tictactoe-movecheck.git```

# Run the game
and simply run game.js from the command line:
```node game.js```

the script will load in the test_board.js sample board as a multi-dimensional array.
You can change the board to contain different X, O and empty space combinations. The empties are designated with a lowercase 'e'.

# make a test board
Have a look at **test_board.js**:

```
const {X, O, e} = require('./vars')
const winSize = 4

const testBoard = [
  [O, O, O, e, e, e, e, e],
  [O, O, e, e, e, O, O, O],
  [O, e, X, X, e, e, e, O],
  [e, e, e, X, X, e, O, e],
  [e, e, e, O, e, X, e, e],
  [e, O, e, O, e, O, X, e],
  [O, e, e, O, e, e, O, O]
]

module.exports = { winSize, testBoard }
```

In the above example a diagonal right of 4 consecutive Xs is the winner.
The const winSize = 4 designates that 4 consecutive X's or O's are required for a win.

# The game.js main logic
Take a look at game.js and you will find that X is checked first as Player 1 and then O is checked next as Player 2.
The game will output simple data for a winner if someone won.
Finally, if there are no spaces left the game (try replacing all the e's with X's and O's) then the game reports a tie.


# Sample Output
The following would be a sample output if a player won:
```
[
	[O,O,O,-,-,-,-,-]
	[O,O,-,-,-,O,O,O]
	[O,-,X,X,-,-,-,O]
	[-,-,-,O,X,-,O,-]
	[-,-,-,O,-,-,-,-]
	[-,O,-,O,-,O,X,-]
	[O,-,-,O,-,-,O,O]

]
```

```
O Won!
MoveCheck {
  player: 'O',
  board: 
   { data: 'OOO-----OO---OOOO-XX---O---OX-O----O-----O-O-OX-O--O--OO',
     gridX: 8,
     gridY: 7,
     winSize: 4 },
  type: 'vertical',
  position: 51,
  depth: 4,
  moves: [ 27, 35, 43, 51 ],
  coords: [ '(3, 3)', '(3, 4)', '(3, 5)', '(3, 6)' ],
  won: true,
  tie: false }
}
```

Notice above that the board has several data elements.

the **board.data** is the board represented as a one dimensional string of characters for very fast processing.
**gridX** and **gridY** are the size of the grid. In the above example the grid is 8x7.
the winSize is taken from the test_board.js file and it means you need 4 in a row.
Experiment with other win sizes up to the grid X or Y dimensions.

The rest of the output will tell you who won.
In this particular case player O won with 4 vertical O's.
You can review the moves thar won (an array of the board data string indexes).
The (x,y) coordinates are listed as coords.

Lastly, the output object will tell you if someone won or there was a tie.

# Additional testing boards

You can view other test boards that start with **test_*.js**. There is a tie board and an unfinished board. Feel free to modify **test_board.js** by putting in a winning diagonal left, diagonal right, horizontal or vertical win of X or O.





