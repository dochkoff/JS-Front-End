function cats(arr) {
    function createCat(name, age) {
        let Cat = {
            name,
            age,
            meow: () => console.log(`${name}, age ${age} says Meow`)
        }

        return Cat;
    };

    let cats = [];

    for (let index = 0; index < arr.length; index++) {
        let catData = arr[index].split(" ");
        let [name, age] = [catData[0], catData[1]];
        cats.push(new createCat(name, age));
    }

    for (const cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);


// OUTPUT
// Mellow, age 2 says Meow
// Tom, age 5 says Meow