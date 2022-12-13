const PaintCan = function(volume){
    this.volume = volume;
}

PaintCan.prototype.pourOut = function(pour){
    this.volume -= pour
}

module.exports = PaintCan;