/**
 *  project
 *  @version 0.1
 *  @author victorlongon.com
 *  @copyright victor longon 2015 
 */

import test from 'test';
    
var obj = window.obj || {};
obj.main = (function main() {
  function init() {
    console.log('_init');
    myFunc();
  }
  return { init };
}());


// doc ready
(function selfEnvolqOnStart($) {
  $(function JqueryReady() {
    obj.main.init();
  });
})(jQuery);
 
