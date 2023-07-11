function solve(input) {
    const products = input.reduce((acc, curr) => {
        const [key, value] = curr.split(" : ");
        acc[key] = Number(value);
        return acc;
    }, {});

    const sortedKeys = Object.keys(products)
    .sort((a, b) => {
        return a.localeCompare(b, undefined, { sensitivity: 'base' })
    });
    let letter = sortedKeys[0][0];

    console.log(letter);
    sortedKeys.forEach((key, i) => {
        if (key[0].toLowerCase() !== letter.toLowerCase()) {
            letter = key[0];
            console.log(letter);
        }
        console.log(`  ${key}: ${products[key]}`);
    });
}

solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'sand : 10',
    'Cake : 59'
]);