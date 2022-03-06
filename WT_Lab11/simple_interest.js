function getInterest(){
    P = parseInt(prompt("Enter Principal: "));
    R = parseInt(prompt("Enter Rate Of Interest: "));
    N = parseInt(prompt("Enter Number Of Years: "));
    I = (P*R*N)/100;
    document.getElementById('p').innerHTML = P;
    document.getElementById('r').innerHTML = R;
    document.getElementById('n').innerHTML = N;
    document.getElementById('i').innerHTML = I;
}   