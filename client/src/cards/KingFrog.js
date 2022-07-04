import Card from "./Card";

export default class KingFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "kingFrog";
        this.attack = 3;
        this.health = 4;
        this.cost = 3;
        this.playerCardSprite = "kingFrog";
        this.opponentCardSprite = "kingFrogEnemy";
    }
}