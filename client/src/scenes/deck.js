import backgroundHandler from '../handlers/backgroundHandler_menu';

export default class Deck extends Phaser.Scene {
    constructor() {
        super("Deck");
    }
    preload(){
        this.load.image('btnBack','src/assets/back.png');
        this.load.image('btnBackHover','src/assets/back_hover.png');
        this.load.image('background','src/assets/menu_back.jpg');

        this.load.image('battleWednesdayFrog', 'src/assets/battle_Wednesday_Frog.png');
        this.load.image('pixelFrog', 'src/assets/Pixel_frog.png');
        this.load.image('ukrainianFrog', 'src/assets/Ukrainian_frog.png');
        this.load.image('aristocratFrog', 'src/assets/Aristocrat_frog.png');
        this.load.image('classicFrog', 'src/assets/Classic_frog.png');
        this.load.image('workFrog', 'src/assets/Frog_on_work.png');
        this.load.image('jabaka', 'src/assets/Jabaka.png');
        this.load.image('japanFrog', 'src/assets/Japan_frog.png');
        this.load.image('kingFrog', 'src/assets/King_frog.png');
        this.load.image('jodaFrog', 'src/assets/Joda_frog.png');
        this.load.image('samuraiFrog', 'src/assets/Samurai_frog.png');
        this.load.image('underwaterFrog', 'src/assets/Underwater_frog.png');

        this.load.image('background','src/assets/back_menu.jpg');
    }

    create() {
        this.backgroundHandler = new backgroundHandler(this);
        this.btnBack = this.add.sprite(
            this.game.config.width * 0.05,
            this.game.config.height * 0.1,
            "btnBack"
        ).setScale(0.2);

        //cards row - 1

        this.card0 = this.add.sprite(
            this.game.config.width * 0.2,
            this.game.config.height * 0.2,
            "battleWednesdayFrog"
        ).setScale(0.4);

        this.card1 = this.add.sprite(
            this.game.config.width * 0.34,
            this.game.config.height * 0.2,
            "pixelFrog"
        ).setScale(0.4);

        this.card2 = this.add.sprite(
            this.game.config.width * 0.48,
            this.game.config.height * 0.2,
            "ukrainianFrog"
        ).setScale(0.4);

        this.card3 = this.add.sprite(
            this.game.config.width * 0.62,
            this.game.config.height * 0.2,
            "aristocratFrog"
        ).setScale(0.4);

        this.card4 = this.add.sprite(
            this.game.config.width * 0.76,
            this.game.config.height * 0.2,
            "classicFrog"
        ).setScale(0.4);

        this.card5 = this.add.sprite(
            this.game.config.width * 0.9,
            this.game.config.height * 0.2,
            "workFrog"
        ).setScale(0.4);

        //cards row - 2

        this.card01 = this.add.sprite(
            this.game.config.width * 0.2,
            this.game.config.height * 0.55,
            "jabaka"
        ).setScale(0.4);

        this.card11 = this.add.sprite(
            this.game.config.width * 0.34,
            this.game.config.height * 0.55,
            "japanFrog"
        ).setScale(0.4);

        this.card21 = this.add.sprite(
            this.game.config.width * 0.48,
            this.game.config.height * 0.55,
            "kingFrog"
        ).setScale(0.4);

        this.card31 = this.add.sprite(
            this.game.config.width * 0.62,
            this.game.config.height * 0.55,
            "jodaFrog"
        ).setScale(0.4);

        this.card41 = this.add.sprite(
            this.game.config.width * 0.76,
            this.game.config.height * 0.55,
            "samuraiFrog"
        ).setScale(0.4);

        this.card51 = this.add.sprite(
            this.game.config.width * 0.9,
            this.game.config.height * 0.55,
            "underwaterFrog"
        ).setScale(0.4);

        //card - row 1, interactive

        this.card0.setInteractive();
        this.card0.on("pointerover", function() {
            this.card0.setTexture("battleWednesdayFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card0.on("pointerout", function() {
            this.setTexture("battleWednesdayFrog").setScale(0.4);
        });

        this.card1.setInteractive();
        this.card1.on("pointerover", function() {
            this.card1.setTexture("pixelFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card1.on("pointerout", function() {
            this.setTexture("pixelFrog").setScale(0.4);
        });

        this.card2.setInteractive();
        this.card2.on("pointerover", function() {
            this.card2.setTexture("ukrainianFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card2.on("pointerout", function() {
            this.setTexture("ukrainianFrog").setScale(0.4);
        });

        this.card3.setInteractive();
        this.card3.on("pointerover", function() {
            this.card3.setTexture("aristocratFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card3.on("pointerout", function() {
            this.setTexture("aristocratFrog").setScale(0.4);
        });

        this.card4.setInteractive();
        this.card4.on("pointerover", function() {
            this.card4.setTexture("classicFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card4.on("pointerout", function() {
            this.setTexture("classicFrog").setScale(0.4);
        });

        this.card5.setInteractive();
        this.card5.on("pointerover", function() {
            this.card5.setTexture("workFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card5.on("pointerout", function() {
            this.setTexture("workFrog").setScale(0.4);
        });

        //card - row 2, interactive

        this.card01.setInteractive();
        this.card01.on("pointerover", function() {
            this.card01.setTexture("jabaka").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card01.on("pointerout", function() {
            this.setTexture("jabaka").setScale(0.4);
        });

        this.card11.setInteractive();
        this.card11.on("pointerover", function() {
            this.card11.setTexture("japanFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card11.on("pointerout", function() {
            this.setTexture("japanFrog").setScale(0.4);
        });

        this.card21.setInteractive();
        this.card21.on("pointerover", function() {
            this.card21.setTexture("kingFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card21.on("pointerout", function() {
            this.setTexture("kingFrog").setScale(0.4);
        });

        this.card31.setInteractive();
        this.card31.on("pointerover", function() {
            this.card31.setTexture("jodaFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card31.on("pointerout", function() {
            this.setTexture("jodaFrog").setScale(0.4);
        });

        this.card41.setInteractive();
        this.card41.on("pointerover", function() {
            this.card41.setTexture("samuraiFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card41.on("pointerout", function() {
            this.setTexture("samuraiFrog").setScale(0.4);
        });

        this.card51.setInteractive();
        this.card51.on("pointerover", function() {
            this.card51.setTexture("underwaterFrog").setScale(0.5); // установка текстуры для кнопки
        }, this);

        this.card51.on("pointerout", function() {
            this.setTexture("underwaterFrog").setScale(0.4);
        });

        //back_button

        this.btnBack.setInteractive();

        this.btnBack.on("pointerover", function() {
            this.btnBack.setTexture("btnBackHover").setScale(0.2); // установка текстуры для кнопки
        }, this);

        this.btnBack.on("pointerout", function() {
            this.setTexture("btnBack").setScale(0.2);
        });

        this.btnBack.on("pointerup", function() {
            this.btnBack.setTexture("btnBack").setScale(0.2);
            this.scene.start("Menu");
        }, this);

    }

    update() {
    }
}