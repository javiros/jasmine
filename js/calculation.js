window.onload = function(){
    function addnumbers(){
        numberOne = parseInt(document.getElementById('number1'));
        numberTwo = parseInt(document.getElementById('number2'));
        var add = numberOne + numberTwo
        var element = document.getElementById('result');
        element.innerHTML = add;

    }

    addnumbers();

}