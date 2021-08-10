class View {
  constructor(game, el) {
    this.game = game;
    this.el = el
    this.board = this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement("ul")
    for (let row = 0; row < 3; row++) {
      const li = document.createElement("li");
      li.appendChild("img src='../assets/blank.png'");
      li.appendChild("img src='../assets/blank.png'");
      li.appendChild("img src='../assets/blank.png'");
      ul.appendChild(li)
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;


//three rows, three spots
//put each row in li, 9 total
