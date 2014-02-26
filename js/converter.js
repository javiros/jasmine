var Converter = (function(){
    //private stuff up here
    var converterValue = 2.2;

    //public stuff down below
    return {
        convertFromImperialToMetric: function(weight) {
            var num = parseInt(weight);

            if (isNaN(num) == true) {
                throw new Error ("not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },
        convertFromMetricToImperial: function(weight) {
            return weight / converterValue;
        }
    }
})