import CardHandler from '../handlers/CardHandler';
import DeckHandler from '../handlers/DeckHandler';
import GameHandler from '../handlers/GameHandler';
import InteractiveHandler from '../handlers/InteractiveHandler';
import SocketHandler from '../handlers/SocketHandler';
import UIHandler from '../handlers/UIHandler';
import BackgroundHandler from '../handlers/backgroundHandler_game';
//import PlayerHead from '../handlers/PlayerHead';

export default class Game extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.image('cyanCardBack', 'src/assets/PlayerCardBack.png');
        this.load.image('magentaCardBack', 'src/assets/EnemyCardBack.png');

        this.load.image('battleWednesdayFrog', 'src/assets/battle_Wednesday_Frog.png');
        this.load.image('battleWednesdayFrogEnemy', 'src/assets/battle_Wednesday_Frog_enemy.png');
        this.load.image('pixelFrog', 'src/assets/Pixel_frog.png');
        this.load.image('pixelFrogEnemy', 'src/assets/Pixel_frog_enemy.png');
        this.load.image('ukrainianFrog', 'src/assets/Ukrainian_frog.png');
        this.load.image('ukrainianFrogEnemy', 'src/assets/Ukrainian_frog_enemy.png');
        this.load.image('aristocratFrog', 'src/assets/Aristocrat_frog.png');
        this.load.image('aristocratFrogEnemy', 'src/assets/Aristocrat_frog_enemy.png');
        this.load.image('classicFrog', 'src/assets/Classic_frog.png');
        this.load.image('classicFrogEnemy', 'src/assets/Classic_frog_enemy.png');
        this.load.image('workFrog', 'src/assets/Frog_on_work.png');
        this.load.image('workFrogEnemy', 'src/assets/Frog_on_work_enemy.png');
        this.load.image('jabaka', 'src/assets/Jabaka.png');
        this.load.image('jabakaEnemy', 'src/assets/Jabaka_enemy.png');
        this.load.image('japanFrog', 'src/assets/Japan_frog.png');
        this.load.image('japanFrogEnemy', 'src/assets/Japan_frog_enemy.png');
        this.load.image('kingFrog', 'src/assets/King_frog.png');
        this.load.image('kingFrogEnemy', 'src/assets/King_frog_enemy.png');
        this.load.image('jodaFrog', 'src/assets/Joda_frog.png');
        this.load.image('jodaFrogEnemy', 'src/assets/Joda_frog_enemy.png');
        this.load.image('samuraiFrog', 'src/assets/Samurai_frog.png');
        this.load.image('samuraiFrogEnemy', 'src/assets/Samurai_frog_enemy.png');
        this.load.image('underwaterFrog', 'src/assets/Underwater_frog.png');
        this.load.image('underwaterFrogEnemy', 'src/assets/Underwater_frog_enemy.png');

        this.load.image('background_game','src/assets/game_background.png');
    }

    create() {
        this.backgroundHandler = new BackgroundHandler(this);
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        //this.PlayerHead = new PlayerHead(this);
        this.InteractiveHandler = new InteractiveHandler(this);


    }

    update() {

    }
}