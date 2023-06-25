function sumOfDigits(number) {
    let string = String(number);
    let strToNum = 0;
    let sum = 0;

    for (let index = 0; index < string.length; index++) {
        strToNum = Number(string[index]);
        sum += strToNum;
    }

    console.log(sum);
}

sumOfDigits(245678);