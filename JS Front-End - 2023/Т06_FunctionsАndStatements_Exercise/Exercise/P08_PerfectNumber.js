function findPerfectNum(num) {
    let sum = 0;

    for (let index = 1; index <= num/2; index++) {
        
        if (num%index===0) {
            sum += index;
        }
        
    }

    const result = num === sum ? "We have a perfect number!" : "It's not so perfect.";
    console.log(result);
}

findPerfectNum(6);
findPerfectNum(1236498);