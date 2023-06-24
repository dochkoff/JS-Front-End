function countingString(text, word) {

    let count = 0;
    let words = text.split(' ');

    for (let searchedWord of words) {
        if (searchedWord===word) {
            count++;
        }
    }
    console.log(count);
}

countingString('This is a word and it also is a sentence', 'is');