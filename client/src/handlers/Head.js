/**
 * Character Avatar Class
 * @param scene [obj] game scene object
 * @param textureName [string] picture key
 * @param positionX [number] initialized x coordinate
 * @param positionY [number] initialized y coordinate
 */


function Head(scene, textureName, positionX, positionY) {
    this.headObj = null;
    this.x = positionX;
    this.y = positionY;
    this.HPObj = null;  // Hero HP
    this.textureName = textureName;
    this.init(scene);
}

Head.prototype.init = function (scene) {
    this.headObj = this.setPic(scene);
    this.HPObj = this.setHP(scene);
}

// Set hero avatar
Head.prototype.setPic = function (scene) {
    let pic = scene.add.image(this.x, this.y, this.textureName);
    return pic;
}

// set blood volume
Head.prototype.setHP = function (scene) {
    let HPbg = scene.add.image(10, 170, "hp_background");
    let HP = scene.add.text(HPbg.width / 2, HPbg.height / 2 + 5, "30", { fill: "#fff", fontSize: "24pt" });
    HP.anchor.set(0.5);
    HPbg.addChild(HP);

    return HP;
}

module.exports = Head;