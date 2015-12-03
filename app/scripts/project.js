'use strict';

var _test = require('test');

var test = _interopRequireWildcard(_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var obj = window.obj || {}; /**
                             *  project
                             *  @version 0.1
                             *  @author victorlongon.com
                             *  @copyright victor longon 2015 
                             */

obj.main = (function main() {
  'use strict';

  function _init() {
    console.log(test.exportVar); // "hej"
  }
  return {
    init: _init
  };
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
var exportVar = exports.exportVar = 'Hej';