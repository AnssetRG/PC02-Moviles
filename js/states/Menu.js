Menu = function (game) {};

//prototype: para crear más funcionalidades
Menu.prototype = {
  create: function () {
    this.game.stage.backgroundColor = "#FFFFFF";
    this.gametitle = this.game.add.sprite(0, 0, "gametitle");
    this.gametitle.anchor.setTo(0.5);
    this.gametitle.x = this.game.world.centerX;
    this.gametitle.y = this.game.height * 0.4;

    this.play = this.game.add.sprite(0, 0, "play");
    this.play.anchor.setTo(0.5);
    this.play.x = this.game.world.centerX;
    this.play.y = this.gametitle.y + this.gametitle.height;
    this.play.inputEnabled = true;
    this.play.events.onInputDown.add(this.GoToGame, this);
  },
  GoToGame: function () {
    this.state.start("Game");
  },
};
