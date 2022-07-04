import io from 'socket.io-client';
import Menu from "../scenes/menu";
import Game from "../scenes/game";

export default class SocketHandler {
    constructor(scene) {

        scene.socket = io('localhost:3000');

        scene.socket.on('connect', () => {
            console.log('Connected!');
            scene.socket.emit('dealDeck', scene.socket.id);
        });

        scene.socket.on('firstTurn', () => {
            scene.GameHandler.changeTurn();
        })

        scene.socket.on('changeGameState', (gameState) => {
            scene.GameHandler.changeGameState(gameState);
            if (gameState === "Initializing") {
                scene.DeckHandler.dealCard(1700, 960, "cardBack", "playerCard");
                scene.DeckHandler.dealCard(1700, 135, "cardBack", "opponentCard");
                scene.dealCards.setInteractive();
                scene.dealCards.setColor('#085602');
            }
        });

        scene.socket.on('changeTurn', () => {
            scene.GameHandler.changeTurn();
            scene.GameHandler.attack();
        })

        scene.socket.on('gameEnd', () => {
            Game.scene.start("Menu");
        })

        scene.socket.on('addCost', () => {
            scene.addCost.addCostPlayer();
            //scene.UIHandler.buildCostText();
        })


        scene.socket.on('changeTurnButton', () => {
            if (scene.GameHandler.isMyTurn === true) {
                scene.changeTurn.setInteractive();
                scene.changeTurn.setColor('#5b008f');
            }
        })


        scene.socket.on('dealCards', (socketId, cards) => {
            if (socketId === scene.socket.id) {
                for (let i in cards) {
                    let card = scene.GameHandler.playerHand.push(scene.DeckHandler.dealCard(500 + (i * 155), 960, cards[i], "playerCard"));
                }
            } else {
                for (let i in cards) {
                    let card = scene.GameHandler.opponentHand.push(scene.DeckHandler.dealCard(500 + (i * 155), 135, "cardBack", "opponentCard"));
                }
            }
        })

        scene.socket.on('cardPlayed', (cardName, socketId) => {
            if (socketId !== scene.socket.id) {
                scene.GameHandler.opponentHand.shift().destroy();
                scene.DeckHandler.dealCard((scene.dropZoneEnemy.x - 400) + (scene.dropZoneEnemy.data.values.cards * 150), scene.dropZoneEnemy.y, cardName, "opponentCard");
                scene.dropZoneEnemy.data.values.cards++;
            }
        })

    }
}