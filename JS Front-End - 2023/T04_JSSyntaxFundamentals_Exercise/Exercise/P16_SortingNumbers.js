function sorting(arr) {
    const sortedArr=arr.sort((a,b)=>a-b)
    const arrLenght = arr.length;
    const result = [];

    for (let index = 0; index < arrLenght/2; index++) {
        result.push(sortedArr.shift());
        result.push(sortedArr.pop());
    }

    return result;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);