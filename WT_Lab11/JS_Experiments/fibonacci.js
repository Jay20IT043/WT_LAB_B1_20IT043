var a = 1,
  b = 0,
  res,
  num;
num = prompt("Enter the number of terms: ");
document.write("Fibonacci Series of " + num + " terms  is ");
for (var i = 0; i < num; i++) {
  document.write("  " + b);
  res = a + b;
  a = b;
  b = res;
  if (num % i == 0) {
  }
}
document.write("" + "<br>");
