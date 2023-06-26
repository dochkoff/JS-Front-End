function print(array, step) {
    const newArr = [];

    for (let index = 0; index < array.length; index+=step) {
        const element = array[index];
        newArr.push(element);
    }

    return newArr;
}

print(['5','20','31','4','20'],2);