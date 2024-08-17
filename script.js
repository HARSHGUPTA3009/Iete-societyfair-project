class Player {}

class Projectile {}

class Enemy {}
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
  }

  render() {
    // this method will run 60 fps
    console.log(this.height, this.width);
  }
}

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 800;
  const game = new game(canvas);
  game.render();
});
