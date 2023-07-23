function solve(num) {
    const numToString = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numToString.length; index++) {
        if (numToString[index] % 2 === 0) {
            evenSum += Number(numToString[index]);
        } else {
            oddSum += Number(numToString[index]);
        }
    }

    return console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(1000435);
solve(3495892137259234);