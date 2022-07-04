import Card from "./Card";

export default class JodaFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "jodaFrog";
        this.attack = 2;
        this.health = 2;
        this.cost = 1;
        this.playerCardSprite = "jodaFrog";
        this.opponentCardSprite = "jodaFrogEnemy";
    }
}