import backgroundHandler from '../handlers/backgroundHandler_menu';

export default class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    preload(){
        this.load.image('sprBtnPlay', 'src/assets/play_button.png');
        this.load.image('sprBtnPlayHover', 'src/assets/play_button_hover.png');
        this.load.image('sprBtnDeck', 'src/assets/deck_button.png');
        this.load.image('sprBtnDeckHover', 'src/assets/deck_button_hover.png');
        this.load.image('sprBtnExit', 'src/assets/exit_button.png');
        this.load.image('sprBtnExitHover', 'src/assets/exit_button_hover.png');
        this.load.image('background','src/assets/menu_back.jpg');

    }

    create() {
        this.backgroundHandler = new backgroundHandler(this);

        this.add.text(this.game.config.width * 0.3, this.game.config.height * 0.2, "Wednesday my dudes").setFontSize(80).setFontFamily('Trebuchet MS');

        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.4,
            "sprBtnPlay"
        );

        this.btnDeck = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprBtnDeck"
        );

        this.btnExit = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.6,
            "sprBtnExit"
        );

        this.btnPlay.setInteractive();
        this.btnDeck.setInteractive();
        this.btnExit.setInteractive();

        //play_button

        this.btnPlay.on("pointerover", function() {
            this.btnPlay.setTexture("sprBtnPlayHover").setScale(1.1); // установка текстуры для кнопки
        }, this);

        this.btnPlay.on("pointerout", function() {
            this.setTexture("sprBtnPlay").setScale(1);
        });

        this.btnPlay.on("pointerup", function() {
            this.btnPlay.setTexture("sprBtnPlay").setScale(1);
            this.scene.start("Game");
        }, this);

        //deck_button

        this.btnDeck.on("pointerover", function() {
            this.btnDeck.setTexture("sprBtnDeckHover").setScale(1.1); // установка текстуры для кнопки
        }, this);

        this.btnDeck.on("pointerout", function() {
            this.setTexture("sprBtnDeck").setScale(1);
        });

        this.btnDeck.on("pointerup", function() {
            this.btnDeck.setTexture("sprBtnDeck").setScale(1);
            this.scene.start("Deck");
        }, this);

        //exit_button

        this.btnExit.on("pointerover", function() {
            this.btnExit.setTexture("sprBtnExitHover").setScale(1.1); // установка текстуры для кнопки
        }, this);

        this.btnExit.on("pointerout", function() {
            this.setTexture("sprBtnExit").setScale(1);
        });

        this.btnExit.on("pointerup", function() {
            this.btnExit.setTexture("sprBtnExit").setScale(1);
            window.close();
        }, this);

        //this.scene.start("Game");
    }

    update() {
    }
}