
 function Solve(value) {
    document.getElementById('res').value += value;
}

function Clear() {
    document.getElementById('res').value = '';
}

function Result() {
    try {
        const expression = document.getElementById('res').value;
        const result = evaluateExpression(expression);
        document.getElementById('res').value = result;
    } catch (error) {
        document.getElementById('res').value = 'Error';
    }
}

function evaluateExpression(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);

    if (!tokens) {
        throw new Error('Invalid expression');
    }

    const stack = [];
    let currentOperator = null;

    for (const token of tokens) {
        if (operators[token]) {
            currentOperator = token;
        } else {
            const number = parseFloat(token);
            if (currentOperator) {
                const previousNumber = stack.pop();
                if (previousNumber === undefined) {
                    throw new Error('Invalid expression');
                }
                const operation = operators[currentOperator];
                stack.push(operation(previousNumber, number));
                currentOperator = null;
            } else {
                stack.push(number);
            }
        }
    }

    if (stack.length !== 1 || currentOperator) {
        throw new Error('Invalid expression');
    }

    return stack[0];
}
 