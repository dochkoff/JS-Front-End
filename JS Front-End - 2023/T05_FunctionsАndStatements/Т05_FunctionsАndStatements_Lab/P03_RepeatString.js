function stringRepeating(string, times) {
    let result = "";
    for (let index = 0; index < times; index++) {
        result += string;
    }

    console.log(result);
}
    
stringRepeating("abc", 3);