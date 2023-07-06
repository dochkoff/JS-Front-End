function converter(jsonStr) {
    let person = JSON.parse(jsonStr);

    let keys = Object.keys(person);
    for(let key of keys){
        console.log(`${key}: ${person[key]}`);
    };
}

converter('{"name": "George", "age": 40, "town": "Sofia"}');

//OUTPUT
// name: George
// age: 40
// town: Sofia