class View {
  constructor(game, el) {
    this.game = game;
    this.el = el
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement("ul")
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const li = document.createElement("li");
        li.innerText = `[${row}, ${col}]`;
        ul.appendChild(li);
        //create image, give image pos of [row, col] 
      }
    }
    this.el.appendChild(ul);
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;


//three rows, three spots
//put each row in li, 9 total
//create 3X3 grid and the positions would look like: [0, 0] [0, 1], [0, 2]
