class View {
  constructor(game, el) {
    this.game = game;
    this.el = el
    this.setupBoard();
    this.bindEvents();
    debugger
  }

  setupBoard() {
    const ul = document.createElement("ul")
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const li = document.createElement("li");
        li.value = row * 3 + col;
        ul.appendChild(li);
      }
    }
    this.el.appendChild(ul);
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    // e.preventDefault();
    if (e.target.tagName === "LI") {
      this.makeMove();
    }
    // document.querySelectorAll("ul li").forEach(li => {
    //   li.addEventListener("click", this.makeMove.bind(this))
    // });
  }

  makeMove() {
    console.log("it works!")
  }

}

module.exports = View;


//three rows, three spots
//put each row in li, 9 total
//create 3X3 grid and the positions would look like: [0, 0] [0, 1], [0, 2]
