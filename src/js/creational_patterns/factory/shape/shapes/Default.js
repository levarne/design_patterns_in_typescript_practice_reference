"use strict";
var Default = (function () {
    function Default() {
    }
    Default.prototype.draw = function () {
        console.log('Inside Default::draw() method.');
        // throws silent error
        console.log('Unknown type of Shape.');
    };
    return Default;
}());
exports.Default = Default;

//# sourceMappingURL=Default.js.map
