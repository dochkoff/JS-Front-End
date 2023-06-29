function signCheck(...nums) {
    let negativeCount = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index]<0) {
            negativeCount++;
        }
    }

    if (negativeCount%2===0) {
        console.log(`Positive`)
    } else {
        console.log(`Negative`)
    }
}