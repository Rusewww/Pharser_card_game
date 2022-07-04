export default class ZoneHandler {
    constructor(scene) {
        this.renderZonePlayer = (x, y) => {
            let dropZonePlayer = scene.add.zone(x, y, 1000, 280).setRectangleDropZone(1000, 270);
            dropZonePlayer.setData({
                "cards": 0
            });
            return dropZonePlayer;
        }
        this.renderOutlinePlayer = (dropZonePlayer) => {
            let dropZoneOutline = scene.add.graphics();
            dropZoneOutline.lineStyle(4, 0x00FF00);
            dropZoneOutline.strokeRect(dropZonePlayer.x - dropZonePlayer.input.hitArea.width / 2, dropZonePlayer.y - dropZonePlayer.input.hitArea.height / 2, dropZonePlayer.input.hitArea.width, dropZonePlayer.input.hitArea.height);
            dropZonePlayer.setData("outline", dropZoneOutline);
        }

        this.renderZoneEnemy = (x, y) => {
            let dropZoneEnemy = scene.add.zone(x, y, 1000, 280).setRectangleDropZone(1000, 270);
            dropZoneEnemy.setData({
                "cards": 0
            });
            return dropZoneEnemy;
        }
        this.renderOutlineEnemy = (dropZoneEnemy) => {
            let dropZoneOutline = scene.add.graphics();
            dropZoneOutline.lineStyle(4, 0xFF0000);
            dropZoneOutline.strokeRect(dropZoneEnemy.x - dropZoneEnemy.input.hitArea.width / 2, dropZoneEnemy.y - dropZoneEnemy.input.hitArea.height / 2, dropZoneEnemy.input.hitArea.width, dropZoneEnemy.input.hitArea.height);
            dropZoneEnemy.setData("outline", dropZoneOutline);
        }
    }
}