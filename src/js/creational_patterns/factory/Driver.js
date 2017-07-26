"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShapeFactory_1 = require('./shape/ShapeFactory');
var IRunnable_1 = require('../../IRunnable');
var Driver = (function (_super) {
    __extends(Driver, _super);
    function Driver() {
        _super.apply(this, arguments);
    }
    Driver.prototype.run = function () {
        var shape1 = ShapeFactory_1.ShapeFactory.getShape('circle');
        var shape2 = ShapeFactory_1.ShapeFactory.getShape('Rectangle');
        var shape3 = ShapeFactory_1.ShapeFactory.getShape('Square');
        shape1.draw();
        shape2.draw();
        shape3.draw();
    };
    return Driver;
}(IRunnable_1.IRunnable));
new Driver().run();

//# sourceMappingURL=Driver.js.map
