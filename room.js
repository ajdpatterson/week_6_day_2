const Room = function(paintArea){
    this.paintArea = paintArea;
    this.painted = false;
}

Room.prototype.paintMe = function(){
    this.painted = true;
};

module.exports = Room;