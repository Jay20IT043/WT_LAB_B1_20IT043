var str = "Hello There!";
var a = str.toLocaleLowerCase();
document.write(a);

var str = "Hello There!";
var a = str.toUpperCase();
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.includes("Hello");
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.startsWith("Hello");
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.endsWith("Hello");
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.search("o");
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.indexOf("T");
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.lastIndexOf("ere");
document.write("<br>"+"<br>"+a);

var str = "Hello There!";
var a = str.replace("Hello","Hi");
document.write("<br>"+"<br>"+a);

var str1 = ", How are you?";
var a = str.concat(str1);
document.write("<br>"+"<br>"+a);