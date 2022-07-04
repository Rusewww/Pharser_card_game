import Card from "./Card.js";

export default class BattleWednesdayFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "battleWednesdayFrog";
        this.attack = 5;
        this.deffence = 5;
        this.playerCardSprite = "battleWednesdayFrog";
        this.opponentCardSprite = "battleWednesdayFrogEnemy";
    }
}