function solve(word, text) {
    word = word.toLowerCase();
    textArr = text.split(" ");

    for (let index = 0; index < textArr.length; index++) {
        if (textArr[index].toLowerCase()===word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')