/**
 *  project
 *  @version 0.1
 *  @author victorlongon.com
 *  @copyright victor longon 2015 
 */
import * as test from 'test';
var obj = window.obj || {};
obj.main = (function main() {
  'use strict';

  function _init() {
    console.log(test.exportVar); // "hej"
  }
  return { 
    init: _init,
  };
}());


// doc ready
(function selfEnvolqOnStart($) {
  $(function JqueryReady() {
    obj.main.init();
  });
})(jQuery);
 
