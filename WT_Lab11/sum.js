function getSum(){
    a = parseInt(prompt("Enter Value1: "));
    b = parseInt(prompt("Enter Value2: "));
    c = a+b;
    document.getElementById('v1').innerHTML = a;
    document.getElementById('v2').innerHTML = b;
    document.getElementById('sum').innerHTML = c;
}