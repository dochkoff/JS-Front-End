function orderSum(product, quantity) {
    const products = {
        coffee: (x) => x * 1.5,
        water: (x) => x * 1,
        coke: (x) => x * 1.4,
        snacks: (x) => x * 2,
    }

    const totalPrice = (product, quantity) =>
        products[product](quantity);
    
    const result = totalPrice(product, quantity);
    
    return console.log(result.toFixed(2));
}

orderSum("water", 5);