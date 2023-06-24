function subtraction(arr) {
    let oddSum = 0;
    let evenSum = 0;
    
    for (i = 0; i < arr.lenght; i++){
        arr[i] = Number(arr[i]);
    }

    arr.forEach(function (element) {
        if (element % 2 === 0) {
            evenSum += element;
        }
        else {
            oddSum += element;
        }
    });
    
    console.log(evenSum - oddSum);
}


subtraction([1,2,3,4,5,6]);