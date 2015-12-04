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
    console.log('_init');
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
"use strict";

var foo = ["one", "two", "three"];

var one = foo[0];
var two = foo[1];
var three = foo[2];