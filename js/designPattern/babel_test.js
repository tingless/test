'use strict';

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function classDecorator(target) {
    target.hasDecorator = true;
    return target;
}

var Button = classDecorator(_class = function Button() {
    _classCallCheck(this, Button);
}) || _class;

console.log('Button', Button.hasDecorator);
