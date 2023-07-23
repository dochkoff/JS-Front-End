function findPalindrome(integers) {
    for (let index = 0; index < integers.length; index++) {
        let integer = String(integers[index]);
        let isPalindrome = true;

        for (let i = 0; i < integer.length/2; i++) {
            if (integer[i] !== integer[integer.length - (i + 1)]) {
                isPalindrome = false;
            }
        }
        console.log(isPalindrome);
    }
}

findPalindrome([123, 323, 421, 121]);
findPalindrome([32, 2, 232, 1010]);