import Phaser from "phaser";
import Menu from "./scenes/menu.js";
import Game from "./scenes/game.js";
import Deck from "./scenes/deck";

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [
        Menu,
        Game,
        Deck
    ]
};

const game = new Phaser.Game(config);