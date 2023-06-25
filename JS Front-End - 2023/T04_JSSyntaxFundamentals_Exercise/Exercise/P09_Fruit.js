function solve(fruit, weightGr, prcicePerKg) {
    weightKg = weightGr /1000;
    totalPrice = weightKg * prcicePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);