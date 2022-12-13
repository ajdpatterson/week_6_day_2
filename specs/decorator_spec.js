const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room(20);
    });
    it('should have an area', function(){
        const actual = room.paintArea;
        assert.strictEqual(actual, 20);
    })
    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });
    it('should be able to be painted', function(){
        room.paintMe()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
});

describe('PaintCan', function(){
    let paintCan;
    beforeEach(function(){
        paintCan = new PaintCan(20);
    })
    it('should have a volume', function(){
        const actual = paintCan.volume;
        assert.strictEqual(actual, 20);
    })
    it('should be able to check for empty', function(){
        paintCan.pourOut(20);
        const actual = paintCan.volume;
        assert.strictEqual(actual, 0);
    })
    it('should be able to pour out some but not all paint', function(){
        paintCan.pourOut(10);
        const actual = paintCan.volume;
        assert.strictEqual(actual, 10)
    })
})

describe('Decorator', function(){
    let decorator;
    let paintCan;
    beforeEach(function(){
        decorator = new Decorator();
        paintCan = new PaintCan(20);
        room = new Room(50)
    })
    it('should start with empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    })
    it('should be able to add a can of paint to paint stock', function(){
        const actual = decorator.addPaintCan(paintCan);
        const expected = [ paintCan ];
        assert.deepStrictEqual(actual, expected);
    });
    it('should be able to total litres of paint in stock', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.howMuchPaint();
        const expected = 60;
        assert.strictEqual(actual, expected);
    });
    it('should be able to calculate whether it has enough paint to paint a room', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.enoughPaint(room);
        const expected = false;
        assert.strictEqual(actual, expected);
    });
    it('should be able to paint room if enough paint in stock', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        decorator.paintRoom(room);
        actual = room.painted
        const expected = true;
    });
});