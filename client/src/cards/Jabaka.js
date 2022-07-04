import Card from "./Card";

export default class Jabaka extends Card {
    constructor(scene) {
        super(scene);
        this.name = "jabaka";
        this.attack = 4;
        this.health = 3;
        this.cost = 1;
        this.playerCardSprite = "jabaka";
        this.opponentCardSprite = "jabakaEnemy";
    }
}