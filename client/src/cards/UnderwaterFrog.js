import Card from "./Card";

export default class UnderwaterFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "underwaterFrog";
        this.attack = 1;
        this.health = 5;
        this.cost = 1;
        this.playerCardSprite = "underwaterFrog";
        this.opponentCardSprite = "underwaterFrogEnemy";
    }
}