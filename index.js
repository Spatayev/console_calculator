const rl = require('readline-sync');
let value, num1, num2, result, operations, question;
let exit = false, isContinue = false;

//Taking numbers
function firstNumber() {
    value = rl.question("Write the first number: ");
    return value;
}
function secondNumber() {
    value = rl.question("Write the second number: ")
    return value;
}

//Math operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function times(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

//Choosing operations
function operationType() {
    operations = rl.question("Select the option: '+' for adding," +
        "'-' for subtraction, '*' for multiplication, '/' for division: ");
    if (operations === "+") {
        return add(num1, num2);
    }
    else if (operations === "-") {
        return subtract(num1, num2);
    }
    else if (operations === "*") {
        return times(num1, num2);
    }
    else if (operations === "/") {
        return division(num1, num2);
    }
    else {
        console.log("I don't have this operation :(( Please choose another one")
        return operationType();
    }
}


//The program
while (!exit) {
    if (!isContinue) {
        num1 = parseInt(firstNumber())
    }
    else {
        num1 = result
    }
    num2 = parseInt(secondNumber());
    result = operationType();
    console.log("The result is: " + result);
    question = rl.question("Do you want to continue calculation with this" +
          "value: Enter the 'y' for yes or 'n' for not. Else write the 'exit' " +
        "for close the program: \n> ");
    if (question === "exit") {
          exit = true;
    }
    else if (question === 'y' || question === 'Y') {
          isContinue = true;
    }
    else {
        isContinue = false;
    }

}



