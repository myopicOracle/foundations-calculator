/*
{
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

button1.addEventListener("click", () => {alert("1")})
button2.addEventListener("click", () => {alert("2")})
button3.addEventListener("click", () => {alert("3")})
button4.addEventListener("click", () => {alert("4")})
button5.addEventListener("click", () => {alert("5")})
button6.addEventListener("click", () => {alert("6")})
button7.addEventListener("click", () => {alert("7")})
button8.addEventListener("click", () => {alert("8")})
button9.addEventListener("click", () => {alert("9")})
button0.addEventListener("click", () => {alert("0")})


// mapping operator buttons
const buttonAdd = document.getElementById("add")
const buttonSubtract = document.getElementById("subtract")
const buttonMultiply = document.getElementById("multiply")
const buttonDivide = document.getElementById("divide")

buttonAdd.addEventListener("click", () => {alert("add")})
buttonSubtract.addEventListener("click", () => {alert("subtract")})
buttonMultiply.addEventListener("click", () => {alert("multiply")})
buttonDivide.addEventListener("click", () => {alert("divide")})
}
*/

// mapping number buttons
{
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
}


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


    // function operate(num1, num2, operator) {
    //     return operator(num1, num2);
    // }




// ========

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
{
const buttonAdd = document.getElementById("add")
const buttonSubtract = document.getElementById("subtract")
const buttonMultiply = document.getElementById("multiply")
const buttonDivide = document.getElementById("divide")
}

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



function calculateResult(num1, num2, operator) {
    return operator(num1, num2);
}


const calculateButton = document.getElementById("calculate")

calculateButton.addEventListener("click", calculateResult)

// calculateButton.onclick = calculateResult;












//***Could create a Switch/Case that checks for 'count', and then put all of these different scenarios in the switchcase with the final return being the calculate output

// ======

/*
let count = 1

element.addEventListener("click", function(event) {


    if (count === 1) {
        store value in Num1
    } else if (count === 2) {
        store value in Operator
    } else if (count === 3) {
        store value in Num2 
    } else alert("ERROR")


})
*/




/*
{ // temp code archives

pseudocode

if 1st click, store value to "a"

if 2nd click, select correct operator function 

if 3rd click, store value to b, AND execute operator handle (i > 3)

if click "i" is > 3, then reset count to 1


{
const buttonArray = document.querySelectorAll("li")

.addEventListener("click", function () {
    let num1 = button.textContent
})

output = button1.click + operator.click + button2.click 

// 3 settings , 1, 2, 3 -- each for anoter click


for (let i = 1; i < 4; i++)
.addEventListener("click", operator)
}

const buttonArray = document.querySelectorAll("li")

const button = document.querySelector("li")
const number = button.textContent  


button.onclick = button.textContent

let count = 0;

{ //pseudocode
function()
    if 1st click, and is num, const num1 = button.textContent  (use e.target?)
    if 2nd click, and operator, pass correct operator to function
    if 3rd click, and is num, const num2 = button.textContetn => then execute  
}

// operator functions
function operate(num1, num2, operator) {
    return operator(num1, num2);
}

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


// mapping iterating through array of numbers

"click", i++

for (let i = 0; i > buttonArray.length; i++) {



    buttonArray.find(value => value.id = id)

    buttonArray[i].addEventListener("click", () => {

        

    })

}


for (let i = 0; i > buttonArray.length; i++) {

    buttonArray[i].addEventListener("click", () => {

        if (count == 1) {
            return num1 = buttonArray[i].id
        } else if (count == 2) {
            return operatorPlaceholder = operator.id
        } if (count == 3) {
            return num2 = buttonArray[i].id
        } else (reset)

    })

}

}
*/
