function solve(num) {
    if (num < 0) {
        console.log("out of bounds");
    }
    else if (num>=66) {
        console.log("elder");
    }
    else if (num >= 20) {
        console.log("adult");
    }
    else if (num >= 14) {
        console.log("teenager");
    }
    else if (num >= 3) {
        console.log("child");
    }
    else if (num >= 0) {
        console.log("baby");
    }
}

solve(20);
solve(-1);