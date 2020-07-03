Menu = function (game) {};

//prototype: para crear más funcionalidades
Menu.prototype = {
  create: function () {
    this.game.stage.backgroundColor = "#FFFFFF";

    this.gametitle = this.add.sprite(0, 0, "gametitle");
    this.gametitle.anchor.setTo(0.5);
    this.gametitle.x = this.game.centerX;
    this.gametitle.y = this.game.height * 0.25;

    this.play = this.add.sprite(0, 0, "play");
    this.play.anchor.setTo(0.5);
    this.play.x = this.game.centerX;
    this.play.y = this.game.height * 0.75;
    this.play.inputEnabled = true;
    this.play.events.onInputDown.add(this.GoToGame, this);
  },
  GoToGame: function () {
    this.state.start("Game");
  },
};
