'use strict';

/**
 *  project
 *  @version 0.1
 *  @author victorlongon.com
 *  @copyright victor longon 2015
 */

var obj = window.obj || {};
obj.main = (function main() {
  'use strict';

  function _init() {
    //simple destructuring test
    var key = 'z';
    var _z = { z: 'bar' };
    var foo = _z[key];

    console.log(foo); // "bar"
  }
  _init();
})();

// doc ready
(function selfEnvolqOnStart($) {
  $(function JqueryReady() {
    obj.main.init();
  });
})(jQuery);