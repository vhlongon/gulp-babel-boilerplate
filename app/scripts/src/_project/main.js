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
    let key = 'z';
    let { [key]: foo } = { z: 'bar' };

    console.log(foo); // "bar"
  }
  _init();
}());


// doc ready
(function selfEnvolqOnStart($) {
  $(function JqueryReady() {
    obj.main.init();
  });
})(jQuery);
