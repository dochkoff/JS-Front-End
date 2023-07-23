function solve(x,y,z) {
    
    let sum = (a,b) => a+b;
    let substract = (a,b) => a-b;

    return console.log(substract(sum(x,y),z))
}

solve(23, 6, 10);
solve(1, 17, 30);