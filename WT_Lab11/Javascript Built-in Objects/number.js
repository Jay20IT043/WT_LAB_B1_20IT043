var a = "100";
var num = Number(a);
document.write(num);

var b = true;
var num = Number(b);
document.write("<br>"+"<br>"+num);

var c = "100 101";
var num = Number(c);
document.write("<br>"+"<br>"+num);

var d = "10.5";
var num = parseInt(d);
document.write("<br>"+"<br>"+num);

var e = "10.5";
var num = parseFloat(e);
document.write("<br>"+"<br>"+num);

var f = "100";
var num = isFinite(f);
document.write("<br>"+"<br>"+num);