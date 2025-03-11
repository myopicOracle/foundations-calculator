// operator functions

function add(num1,num1) {
    return num1 + num1;
}

function subtract(num1,num1) {
    return num1 - num1;
}

function multiply(num1,num1) {
    return num1 * num1;
}

function divide(num1,num1) {
    return num1 / num1;
}


// mapping number buttons

const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const button0 = document.getElementById("0")

let count = 0;
let num1;
let num2;

    button1.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 1;
        else if (count === 3) num2 = 1;
        else alert("ERROR");
    })
    button2.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 2;
        else if (count === 3) num2 = 2;
        else alert("ERROR");
    })
    button3.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 3;
        else if (count === 3) num2 = 3;
        else alert("ERROR");
    })
    button4.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 4;
        else if (count === 3) num2 = 4;
        else alert("ERROR");
    })
    button5.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 5;
        else if (count === 3) num2 = 5;
        else alert("ERROR");
    })
    button6.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 6;
        else if (count === 3) num2 = 6;
        else alert("ERROR");
    })
    button7.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 7;
        else if (count === 3) num2 = 7;
        else alert("ERROR");
    })
    button8.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 8;
        else if (count === 3) num2 = 8;
        else alert("ERROR");
    })
    button9.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 9;
        else if (count === 3) num2 = 9;
        else alert("ERROR");
    })
    button0.addEventListener("click", () => {
        count++
        if (count === 1) num1 = 0;
        else if (count === 3) num2 = 0;
        else alert("ERROR");
    })


// mapping operator buttons

const buttonAdd = document.getElementById("add")
const buttonSubtract = document.getElementById("subtract")
const buttonMultiply = document.getElementById("multiply")
const buttonDivide = document.getElementById("divide")


let operator;

    buttonAdd.addEventListener("click", () => {
        count++
        if (count === 2) operator = add;
        else alert("ERROR");
    })
    buttonSubtract.addEventListener("click", () => {
            count++
        if (count === 2) operator = subtract;
        else alert("ERROR");
    })
    buttonMultiply.addEventListener("click", () => {
            count++
        if (count === 2) operator = multiply;
        else alert("ERROR");
    })
    buttonDivide.addEventListener("click", () => {
            count++
        if (count === 2) operator = divide;
        else alert("ERROR");
    })


const finalResult = document.getElementById("finalResult")

function calculateResult(num1, num2, operator) {
    return operator(num1, num2);
}

const calculateButton = document.getElementById("calculate")

const result = calculateButton.addEventListener("click", calculateResult)

finalResult.innerHTML = `The answer is: ${result}`;


// finalResult.innerHTML = `The answer is: ${result}`;
