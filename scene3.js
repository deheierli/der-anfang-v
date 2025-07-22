
const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  backgroundColor: '#1a1a1a',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

let player, cursors, mei, pony;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('bg', 'assets/backgrounds/livingroom.png');
  this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
  this.load.image('mei', 'https://labs.phaser.io/assets/sprites/orange-cat.png'); // placeholder
  this.load.image('pony', 'https://labs.phaser.io/assets/sprites/orange-cat.png'); // placeholder
}

function create() {
  this.add.image(160, 120, 'bg');

  player = this.physics.add.sprite(160, 200, 'player');
  cursors = this.input.keyboard.createCursorKeys();

  // Pony sitzt ruhig
  pony = this.add.sprite(240, 180, 'pony');

  // Mei läuft neugierig
  mei = this.physics.add.sprite(80, 120, 'mei');
  this.tweens.add({
    targets: mei,
    x: 200,
    yoyo: true,
    repeat: -1,
    duration: 3000,
    ease: 'Sine.easeInOut'
  });

  this.add.text(10, 10, "Zuhause – zwei Wochen später …", {
    font: "8px monospace",
    fill: "#ffffff"
  });
}

function update() {
  player.setVelocity(0);
  if (cursors.left.isDown) player.setVelocityX(-80);
  else if (cursors.right.isDown) player.setVelocityX(80);
  if (cursors.up.isDown) player.setVelocityY(-80);
  else if (cursors.down.isDown) player.setVelocityY(80);
}
