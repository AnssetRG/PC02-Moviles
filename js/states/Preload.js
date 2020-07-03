Preload = function (game) {};

//prototype: para crear más funcionalidades
Preload.prototype = {
  preload: function () {
    //escalar la pantalla de acuerdo a los recursos, NONE es por defecto
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //centrar el juego horizontalmente
    this.scale.pageAlignHorizontally = true;
    //centrar el juego verticalmente
    this.scale.pageAlignVertically = true;

    //nomrbre de spritesheet, dirección,ancho, alto, cantidad de fotogramas, desfase en x, desfase en y

    this.load.image("gameover", "assets/images/gameover.png");
    this.load.image("gametitle", "assets/images/gametitle.png");
    this.load.image("higher", "assets/images/higher.png");
    this.load.image("loading", "assets/images/loading.png");
    this.load.image("lower", "assets/images/lower.png");
    this.load.spritesheet("numbers", "assets/images/numbers.png", 100, 100, 10);
    this.load.image("play", "assets/images/play.png");
  },
  create: function () {
    //lo que está en el state pasado se limpia
    //si se pone falso, se queda los datos en memoria
    this.state.start("Menu");
  },
};
