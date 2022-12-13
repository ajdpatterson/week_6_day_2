const Decorator = function(){
    this.paintStock = [];
};

Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan);
    return this.paintStock;
};

Decorator.prototype.howMuchPaint = function(){
    let total = 0;
    for (paintCan of this.paintStock) {
        total += paintCan.volume;
    };
    return total;
};

Decorator.prototype.enoughPaint = function(room){
    if (this.howMuchPaint() >= room.paintArea) {
        return true;
    };
    return false;
};

Decorator.prototype.paintRoom = function(room){
    canPaint = this.enoughPaint(room)
    if (canPaint) {
        return room.painted = true
    }
    else return room.painted = false

}

module.exports = Decorator;