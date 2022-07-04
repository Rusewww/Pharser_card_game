export default class InteractiveHandler {
    constructor(scene) {

        scene.cardPreview = null;

        scene.changeTurn.on('pointerdown', () => {
            scene.socket.emit("changeTurn", scene.socket.id);
            scene.changeTurn.disableInteractive();
        })

        scene.changeTurn.on('pointerover', () => {
            scene.changeTurn.setColor('#b433ff');
        })

        scene.changeTurn.on('pointerout', () => {
            scene.changeTurn.setColor('#5b008f');
        })


        scene.dealCards.on('pointerdown', () => {
            scene.socket.emit("dealCards", scene.socket.id);
            scene.dealCards.disableInteractive();
        })

        scene.dealCards.on('pointerover', () => {
            scene.dealCards.setColor('#20d005');
        })

        scene.dealCards.on('pointerout', () => {
            scene.dealCards.setColor('#085602')
        })


        scene.input.on('pointerover', (event, gameObjects) => {
            let pointer = scene.input.activePointer;
            if (gameObjects[0].type === "Image" && gameObjects[0].data.list.name !== "cardBack") {
                scene.cardPreview = scene.add.image(pointer.worldX, pointer.worldY, gameObjects[0].data.values.sprite).setScale(0.7, 0.7);
            }
        });

        scene.input.on('pointerout', (event, gameObjects) => {
            if (gameObjects[0].type === "Image" && gameObjects[0].data.list.name !== "cardBack") {
                scene.cardPreview.setVisible(false);
            }
        });

        scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        scene.input.on('dragstart', (pointer, gameObject) => {
            gameObject.setTint(0xff69b4);
            scene.children.bringToTop(gameObject);
            scene.cardPreview.setVisible(false);
        })

        scene.input.on('dragend', (pointer, gameObject, dropped) => {
            gameObject.setTint();
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        scene.input.on('drop', (pointer, gameObject, dropZonePlayer) => {
            if (scene.GameHandler.isMyTurn && scene.GameHandler.gameState === "Ready" && scene.dropZonePlayer.data.values.cards < 6) {
                gameObject.x = (dropZonePlayer.x - 400) + (dropZonePlayer.data.values.cards * 150);
                gameObject.y = dropZonePlayer.y;
                scene.dropZonePlayer.data.values.cards++;
                scene.input.setDraggable(gameObject, false);
                scene.socket.emit('cardPlayed', gameObject.data.values.name, scene.socket.id);
            } else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

    }
}