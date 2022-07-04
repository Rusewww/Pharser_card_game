export default class GameHandler {
    constructor(scene) {
        this.gameState = "Initializing";
        this.isMyTurn = false;
        this.playerCost = 1;
        this.playerMoveCost = this.playerCost;
        this.opponentCost = 1;
        this.opponentMoveCost = this.opponentCost;
        this.playerDeck = [];
        this.opponentDeck = [];
        this.playerHand = [];
        this.opponentHand = [];
        this.playerZone = [];
        this.opponentZone = [];

        this.attack = () => {
            //this.opponentZone.cards[1].health -= this.playerZone.cards[1].attack;
            console.log("PlayerDeck: " + this.playerDeck);
        }
        
        this.changeTurn = () => {
            this.isMyTurn = !this.isMyTurn;
            console.log("isMyTurn: " + this.isMyTurn);
        }

        this.addCostPlayer = () => {
            this.playerCost++;
        }

        this.changeGameState = (gameState) => {
            this.gameState = gameState;
            console.log("GameState: " + this.gameState);
        }
    }
}