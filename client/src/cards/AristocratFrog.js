import Card from "./Card";

export default class AristocratFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "aristocratFrog";
        this.attack = 2;
        this.health = 3;
        this.cost = 1;
        this.playerCardSprite = "aristocratFrog";
        this.opponentCardSprite = "aristocratFrogEnemy";
    }
}