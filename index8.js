function Add() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let result = number2+number1
    document.getElementById("result").innerHTML= result;
}
function Sub() {

    let number1 = document.getElementById("num1").value;
    let number2 =document.getElementById("num2").value;
    let result = number1-number2
    document.getElementById("result").innerHTML=result
}