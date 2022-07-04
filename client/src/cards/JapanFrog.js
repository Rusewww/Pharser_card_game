import Card from "./Card";

export default class JapanFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "japanFrog";
        this.attack = 3;
        this.health = 1;
        this.cost = 1;
        this.playerCardSprite = "japanFrog";
        this.opponentCardSprite = "japanFrogEnemy";
    }
}