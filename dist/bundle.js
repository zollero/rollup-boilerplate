(function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Customer = function () {
    function Customer(name) {
        classCallCheck(this, Customer);

        this.name = name;
    }

    createClass(Customer, [{
        key: 'sayHi',
        value: function sayHi() {
            console.log('The name is: ' + this.name);
        }
    }]);
    return Customer;
}();

var kevin = new Customer('kevin');

kevin.sayHi();

}());
//# sourceMappingURL=bundle.js.map
