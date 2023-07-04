function calc(num1, operator, num2) {
    const calculator = {
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
    };

    return console.log(calculator[operator](num1, num2).toFixed(2));
}

calc(5, '+', 10);