Number = function (game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "number");
  this.game = game;
  this.game.physics.arcade.enable(this);
  this.body.velocity.x = 100;
};

Number.prototype = Object.create(Phaser.Sprite.prototype);
Number.prototype.constructor = Number;

Number.prototype.update = function () {
  if (this.x >= this.game.width) {
    this.kill();
  }
};
