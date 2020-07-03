GameOver = function (game) {};

//prototype: para crear más funcionalidades
GameOver.prototype = {
  create: function () {
    this.game.stage.backgroundColor = "#FFFFFF";
    this.gameover = this.game.add.sprite(0, 0, "gameover");
    this.gameover.anchor.setTo(0.5);
    this.gameover.x = this.game.world.centerX;
    this.gameover.y = this.game.world.centerY;
    this.gameover.inputEnabled = true;
    this.gameover.events.onInputDown.add(this.GoToMenu, this);
  },
  GoToMenu: function () {
    this.state.start("Menu");
  },
};
