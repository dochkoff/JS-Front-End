function divisionOfFactorial(num1, num2) {
    
    function findFactoral(x) {
        let factorial = 1;

        for (let index = x; index >0; index--){
            factorial *= index;
        }

        return factorial;
    }
    console.log((findFactoral(num1) / findFactoral(num2)).toFixed(2));
}

divisionOfFactorial(5, 2);