import Card from "./Card";

export default class PixelFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "pixelFrog";
        this.attack = 2;
        this.health = 3;
        this.cost = 1;
        this.playerCardSprite = "pixelFrog";
        this.opponentCardSprite = "pixelFrogEnemy";
    }
}