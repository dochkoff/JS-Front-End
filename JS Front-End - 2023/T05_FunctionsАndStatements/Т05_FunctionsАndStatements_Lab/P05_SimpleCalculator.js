function simpleCalc(num1, num2, operator) {
    const calculator = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    };

    const calculate = (num1, num2, operator) =>
        calculator[operator] ? calculator[operator](num1, num2) : 0;

    const result = calculate(num1, num2, operator);
    return console.log(result);
}

simpleCalc(12, 19, 'add');