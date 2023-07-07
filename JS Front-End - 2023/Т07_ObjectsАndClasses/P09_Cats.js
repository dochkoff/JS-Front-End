function solve(arr) {

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

let cats = [];

for (let index = 0; index < arr.length; index++) {
    let catData = arr[index].split(" ");
    let [name, age] = [catData[0], catData[1]];
    cats.push(new Cat(name, age));
}

for (const cat of cats) {
    cat.meow();
}
}
solve(['Mellow 2', 'Tom 5']);

// OUTPUT
// Mellow, age 2 says Meow
// Tom, age 5 says Meow