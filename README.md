## Minesweeper
A ReactJS implementation of the childhood favorite  
Jake Lipson, 6/24/2017  

- [Installation](#installation)
- [Gameplay](#gameplay)
- [Implementation Notes](#implementation-notes)
- [Potential Improvements](#potential-improvements)
- [Known Issues](#known-issues)


### Installation
To get started, you can just follow these easy steps!
1. Install Node.JS on your computer for access to NPM. You can find that link [here](https://nodejs.org/en/download/)
2. Run `npm install` to download the requisite packages for this app.
3. Run `npm start` to run a development build, then visit `localhost:3000`

### Gameplay
If you're not familiar with Minesweeper, there are a handful of mines scattered
across a grid and it's your job to slowly uncover each tile without clicking on
a mine. Each tile without a mine has a value on it referring to the number of
mines adjacent to that tile. If the tile is blank, there are no mines adjacent.
In addition, clicking on a tile without any adjacent mines uncovers all of that
tile's neighbors for you, as we know they are all mine-free. To win the game, you
should plant a flag on each tile you believe has a mine - when all mines are covered
by a flag, the game is over!

The only major note about this implementation is that to plant a flag, please
click the button in the status bar asking you to toggle to flag mode. This will
switch your clicks from "uncovering tiles" to "planting flags." You can always
click the same button to switch back to uncovering tiles.

### Implementation Notes
I chose to solve this problem in ReactJS because I haven't used a GUI
for Java to date and wanted to work quickly. However, a major tradeoff of choosing
to work with ReactJS is performance. While there are many useful ways of managing web application state,
the time required to build that layer is enough to make a difference in the short window of time I had.
As a result, this game does not run as quickly as it could.
In addition, were we to play an enormous game of Minesweeper, we would strain the memory of the browser.
This is because revealing adjacent cells for cells with no neighboring mines uses recursion.

I also chose to implement a counter showing the number of mines left assuming each flag is correctly placed, rather than the actual count. This helps keep the game a little more challenging while still providing a helpful reminder
about how many flags have been placed and how many mines are on the game board.

### Potential Improvements
* I laid the groundwork for changing the difficulty of the game, but didn't spend a considerable amount of time testing the larger grids.
* There is MUCH work to be done on this UI!


### Known Issues
* Selecting a medium or large grid causes a padding issue.
