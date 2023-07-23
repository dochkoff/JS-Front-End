function modification(input) {

    function findSum(x) {
        x = x.toString();
        sum = 0;
        for (let index = 0; index < x.length; index++) {
            sum += Number(x[index]);
        }
        return sum/x.length;
    }

    if (findSum(input) < 5) {
        while (findSum(input) < 5) {
            input = input.toString() + '9';
            input = Number(input);
        }
    }

    console.log(input);
}

modification(101);
modification(5835);