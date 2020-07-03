Number = function (game, x, y, frame) {
  Phaser.Sprite.call(this, game, 0, y, "numbers");
  this.anchor.setTo(0.5);
  this.frame = frame;
  this.game = game;

  this.x = game.width + this.width;
  this.y = game.world.centerY;

  this.game.add.existing(this);

  this.in_scene = this.game.add.tween(this).to({ x: game.world.centerX }, 300);
  this.in_scene.start();
};

//Igual al prototype de Phazer dando todas sus propiedades
Number.prototype = Object.create(Phaser.Sprite.prototype);
//Inicialziacion del objeto recibe la función Player - sobrescribe el constructor default por este de Player
Number.prototype.constructor = Number;

Number.prototype.TweenNumber = function (pos) {
  this.out_scene = this.game.add.tween(this).to({ x: -this.width }, 300);
  this.out_scene.start();
};
