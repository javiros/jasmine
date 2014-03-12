//window.onload = function(){
//    function addnumbers(){
//        numberOne = parseInt(document.getElementById('number1'));
//        numberTwo = parseInt(document.getElementById('number2'));
//        var add = numberOne + numberTwo
//        var element = document.getElementById('result');
//        element.innerHTML = add;
//
//    }
//
//    addnumbers();
//
//}
window.onload = function(){
    var Converter = (function() {

        // Private stuff up here
        var converterValue = 2.2;


        // Public methods here
        return {
            convertFromPoundsToKIlo: function(weight) {
                var num = parseInt(weight);

                if (isNaN(num) == true) {
                    throw new Error ("Not a number");
                }
                num = num / converterValue;
                return Math.round(num);
            },

            convertFromMetricToImperial: function(weight) {
                return weight / converterValue;
            }

        }
    }())
}