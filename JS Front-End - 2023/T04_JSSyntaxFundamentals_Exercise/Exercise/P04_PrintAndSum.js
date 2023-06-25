function solve(startNum, endNum) {
    let sum = 0;
    let arr = [];

    for (let index = startNum; index <= endNum; index++) {
        sum += index;
        arr.push(index);
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);