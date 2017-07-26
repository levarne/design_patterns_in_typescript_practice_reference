"use strict";
var Circle_1 = require('./shapes/Circle');
var Rectangle_1 = require('./shapes/Rectangle');
var Square_1 = require('./shapes/Square');
var Default_1 = require('./shapes/Default');
var ShapeFactory = (function () {
    function ShapeFactory() {
    }
    ShapeFactory.getShape = function (shapeType) {
        switch (shapeType.toLowerCase()) {
            case 'circle':
                return new Circle_1.Circle();
            case 'rectangle':
                return new Rectangle_1.Rectangle();
            case 'square':
                return new Square_1.Square();
            default:
                return new Default_1.Default();
        }
    };
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;

//# sourceMappingURL=ShapeFactory.js.map
