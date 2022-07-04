import Card from "./Card";

export default class WorkFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "workFrog";
        this.attack = 1;
        this.health = 2;
        this.cost = 1;
        this.playerCardSprite = "workFrog";
        this.opponentCardSprite = "workFrogEnemy";
    }
}