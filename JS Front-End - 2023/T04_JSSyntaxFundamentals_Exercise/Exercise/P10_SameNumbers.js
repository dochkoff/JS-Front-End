function sameNumber(input) {
    let numToStr = String(input);
    let unicNums = new Set();
    let sum = 0;
    let isSame = true;

    for (let index = 0; index < numToStr.length; index++) {
        let digit = Number(numToStr[index]);
        unicNums.add(digit);
        sum += digit;
    }

    if (unicNums.size>1) {
        isSame = false;
    }

    console.log(isSame);
    console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);