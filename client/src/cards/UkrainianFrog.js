import Card from "./Card.js";

export default class ukrainianFrog extends Card {
    constructor(scene) {
        super(scene);
        this.attack = 9;
        this.deffence = 9;
        this.cost = 2;
        this.name = "ukrainianFrog";
        this.playerCardSprite = "ukrainianFrog";
        this.opponentCardSprite = "ukrainianFrogEnemy";
    }
}