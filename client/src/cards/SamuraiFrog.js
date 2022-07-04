import Card from "./Card";

export default class SamuraiFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "samuraiFrog";
        this.attack = 6;
        this.health = 3;
        this.cost = 1;
        this.playerCardSprite = "samuraiFrog";
        this.opponentCardSprite = "samuraiFrogEnemy";
    }
}