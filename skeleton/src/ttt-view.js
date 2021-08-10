class View {
  constructor(game, el) {
    this.game = game;
    this.el = el
    this.setupBoard();
    this.bindEvents();
    this.count = 0;
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
    if (e.target.tagName === "LI") {
      this.makeMove();
    }
  }

  makeMove() {
    if (this.count % 2 === 0) {
      event.target.classList.add("X")
      event.target.innerText = "X"
    } else {
      event.target.classList.add("O")
      event.target.innerText = "O"
    }
    console.log(event.target.classList)
    this.count += 1
  }

}

module.exports = View;






