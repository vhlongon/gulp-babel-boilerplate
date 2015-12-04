'use strict';

var _test = require('test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = window.obj || {}; /**
                             *  project
                             *  @version 0.1
                             *  @author victorlongon.com
                             *  @copyright victor longon 2015 
                             */

obj.main = (function main() {
  function init() {
    console.log('_init');
    myFunc();
  }
  return { init: init };
})();

// doc ready
(function selfEnvolqOnStart($) {
  $(function JqueryReady() {
    obj.main.init();
  });
})(jQuery);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	console.log('hi from test.js');
};

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJ0ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBU0EsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFOzs7Ozs7O0FBQUMsQUFDM0IsR0FBRyxDQUFDLElBQUksR0FBSSxDQUFBLFNBQVMsSUFBSSxHQUFHO0FBQzFCLFdBQVMsSUFBSSxHQUFHO0FBQ2QsV0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixVQUFNLEVBQUUsQ0FBQztHQUNWO0FBQ0QsU0FBTyxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQztDQUNqQixDQUFBLEVBQUUsQUFBQzs7O0FBQUMsQUFJTCxDQUFDLFNBQVMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO0FBQzdCLEdBQUMsQ0FBQyxTQUFTLFdBQVcsR0FBRztBQUN2QixPQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2pCLENBQUMsQ0FBQztDQUNKLENBQUEsQ0FBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7OztrQkN4QkksWUFBVztBQUN6QixRQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Q0FDL0I7O0FBQUEsQ0FBQyIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogIHByb2plY3RcclxuICogIEB2ZXJzaW9uIDAuMVxyXG4gKiAgQGF1dGhvciB2aWN0b3Jsb25nb24uY29tXHJcbiAqICBAY29weXJpZ2h0IHZpY3RvciBsb25nb24gMjAxNSBcclxuICovXHJcblxyXG5pbXBvcnQgdGVzdCBmcm9tICd0ZXN0JztcclxuICAgIFxyXG52YXIgb2JqID0gd2luZG93Lm9iaiB8fCB7fTtcclxub2JqLm1haW4gPSAoZnVuY3Rpb24gbWFpbigpIHtcclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ19pbml0Jyk7XHJcbiAgICBteUZ1bmMoKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgaW5pdCB9O1xyXG59KCkpO1xyXG5cclxuXHJcbi8vIGRvYyByZWFkeVxyXG4oZnVuY3Rpb24gc2VsZkVudm9scU9uU3RhcnQoJCkge1xyXG4gICQoZnVuY3Rpb24gSnF1ZXJ5UmVhZHkoKSB7XHJcbiAgICBvYmoubWFpbi5pbml0KCk7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiBcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7IFxyXG5cdGNvbnNvbGUubG9nKCdoaSBmcm9tIHRlc3QuanMnKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
