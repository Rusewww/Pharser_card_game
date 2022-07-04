/**
 * Player character avatar
 */
let utils = require("./Utils");
let Head = require("./Head");

function HeroHead(scene, textureName, positionX, positionY) {
    Head.apply(this, arguments);
}

// HeroHead inherits from the Head class
utils.extend(HeroHead, Head);

/**
 *  @override Override the setHP method
 */
HeroHead.prototype.setHP = function(scene) {
    let HPbg = scene.add.image(this.x, this.y - 55, "hp_background");
    let HP = scene.add.text(HPbg.width / 2, HPbg.height / 2 + 5, "30", {
        fill: "#fff",
        fontSize: "24pt"
    });
    HP.anchor.set(0.5);
    HPbg.addChild(HP);

    return HP;
}

module.exports = HeroHead;