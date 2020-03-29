const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(MovingObject, Animate);

Animate.RADIUS = 0;

function Animate(options, imageName, animationLength) {

    this.frame = -1;
    this.animationLength = animationLength;
    this.imageName = imageName;
    this.animations = [];    
    for (let i = 0; i < animationLength; i++) {
        let animation = new Image ();
        animation.src = this.frameName(i);
        this.animations.push(animation);
    }


    let moOptions = {
        pos: options.pos,
        width: options.width,
        height: options.height,
        radius: Animate.RADIUS,
        vel: [0, 0],
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

Animate.prototype.frameName = function (frame) {
    let s = '000' + frame;
    s = s.substr(s.length - 3);
    return `./images/${this.imageName}${s}.png`
}

Animate.prototype.getImage = function () {
    // debugger
    this.frame = (this.frame + 1) % this.animationLength;
    return this.animations[this.frame];
}



module.exports = Animate;