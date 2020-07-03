Game = function (game) {};

Game.prototype = {
  init: function (currentLevel) {
    this.higher = this.game.add.sprite(0, 0, "higher");
    this.higher.anchor.setTo(0.5, 0);
    this.higher.x = this.game.world.centerX;
    this.higher.inputEnabled = true;
    this.higher.events.onInputDown.add(this.higherFunction, this);

    this.lower = this.game.add.sprite(0, 0, "lower");
    this.lower.anchor.setTo(0.5, 1);
    this.lower.x = this.game.world.centerX;
    this.lower.y = this.game.height;
    this.lower.inputEnabled = true;
    this.lower.events.onInputDown.add(this.lowerFunction, this);

    this.random_number = this.game.rnd.integerInRange(0, 9);

    this.actual_number = new Number(
      this.game,
      this.game.world.centerX,
      this.game.world.centerY,
      this.random_number
    );

    this.points = 20;
  },
  create: function () {},
  updateNumbers: function () {
    this.temp_n = this.random_number;

    this.actual_number.TweenNumber();

    this.random_number = this.game.rnd.integerInRange(0, 9);

    this.new_number = new Number(
      this.game,
      this.game.world.centerX,
      this.game.world.centerY,
      this.random_number
    );
  },
  higherFunction: function () {
    this.updateNumbers(this);
    if (this.temp_n < this.random_number) this.points += 10;
    else this.points -= 5;

    console.log(this.points);
    this.actual_number = this.new_number;

    if (this.points <= 0) this.goToGameOver(this);
  },
  lowerFunction: function () {
    this.updateNumbers(this);
    if (this.temp_n > this.random_number) this.points += 10;
    else this.points -= 5;

    console.log(this.points);
    this.actual_number = this.new_number;

    if (this.points <= 0) this.goToGameOver(this);
  },
  goToGameOver: function () {
    this.state.start("GameOver");
  },
};
