
function BackGround(scene) {
    this.picObj = null;
    this.init(scene);
}

BackGround.prototype.init = function (scene) {
    this.picObj = this.setPic(scene);

}

BackGround.prototype.setPic = function (scene) {
    return scene.add.image(960, 540, 'background_game');
}

module.exports = BackGround;