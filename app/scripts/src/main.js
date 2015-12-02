/**
 * Zoooma
 * @version 0.1
 * @author www.zooma.se
 * @copyright Zooma 2015
 */

var ZM = window.ZM || {};
ZM.grader = (function () {

    "use strict";

    ///////////////////////////////////////////////////////////////////////
    // Private methods & properties
    ///////////////////////////////////////////////////////////////////////
    

    ///////////////////////////////////////////////////////////////////////
    // Private properties & methods
    ///////////////////////////////////////////////////////////////////////

    function _init() {
        $("#sgE-2329209-1-7-10011").attr("placeholder", 'Email Address*');
        $("#sgE-2329209-1-7-10012").attr("placeholder", 'Password*');
           
        $('#sgE-2329209-1-7-10011').on('blur', function(e){
            var $val = $(this).val().toLowerCase();
            $(this).val($val);
        });
    }


    ///////////////////////////////////////////////////////////////////////
    // Public methods & properties
    ///////////////////////////////////////////////////////////////////////
    return {
        init: _init
    };
}());


// Doc ready
(function ($) {

    $(function () {
        ZM.grader.init();
    });

})(jQuery);
