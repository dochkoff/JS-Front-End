function largestNum(num1, num2, num3){
    let maxNum=0;

    if (num1>num2 && num1>num3) {
        maxNum=num1;
    }
    else if (num2>num1 && num2>num3) {
        maxNum=num2;
    }
    else if (num3>num1 && num3>num2) {
        maxNum=num3;
    }

    console.log(`The largest number is ${maxNum}.`);
}

largestNum(5, -3, 16);