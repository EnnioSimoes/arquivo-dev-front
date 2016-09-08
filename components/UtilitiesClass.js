// Verifica dependência
if (typeof jQuery === "undefined") {
    throw new Error("Este modulo requer jQuery");
}

var UtilitiesClass = (function() {
    function Utilities() {
        //
    }

    Utilities.prototype = {
        init: function() {

        },
        addEvent: function() {
            // var self = this;
            // var el = document.getElementsByClassName("star-like");
            //
            // for (var i = 0; i < el.length; i++) {
            //
            //     //   el[i].removeEventListener('mouseenter');
            //     el[i].addEventListener('click', function(event) {
            //         event.preventDefault();
            //         self.verticalBounce(this);
            //     }, false);
            // }
        }
    };

    return Utilities;
})();
