function isCheck() {
    var num = document.getElementById('evenOdd').value;
    if ((num % 2) == 0) {
        document.getElementById('showMssg').innerHTML = "Number " + num + "  is an Even number";
    }
    else {
        document.getElementById('showMssg1').innerHTML = "Number " + num + "  is an Odd number";
    }
    if (num === "") {
        document.getElementById('showMssg').innerHTML = "";
    }
}