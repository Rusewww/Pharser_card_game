import Card from "./Card";

export default class ClassicFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "classicFrog";
        this.attack = 1;
        this.health = 1;
        this.cost = 1;
        this.playerCardSprite = "classicFrog";
        this.opponentCardSprite = "classicFrogEnemy";
    }
}