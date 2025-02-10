function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDisplay = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers in both fields.";
        return;
    }

    let result;
    let message;

    switch (operation) {
        case '+':
            result = num1 + num2;
            message = `The sum of ${num1} and ${num2} is ${result}.`;
            break;
        case '-':
            result = num1 - num2;
            message = `The difference of ${num1} and ${num2} is ${result}.`;
            break;
        case '*':
            result = num1 * num2;
            message = `The product of ${num1} and ${num2} is ${result}.`;
            break;
        case '/':
            if (num2 === 0) {
                message = "Division by zero is not allowed.";
            } else {
                result = num1 / num2;
                message = `The quotient of ${num1} and ${num2} is ${result}.`;
            }
            break;
        case '%':
            if (num2 === 0) {
                message = "Modulo by zero is not allowed.";
            } else {
                result = num1 % num2;
                message = `The remainder of ${num1} divided by ${num2} is ${result}.`;
            }
            break;
        default:
            message = "Invalid operation.";
    }

    resultDisplay.textContent = message;
}