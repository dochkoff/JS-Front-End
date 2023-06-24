function censorship(text, word) {

    let censored = "*".repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, censored);
    }

    console.log(text);
}

censorship('A small sentence with some words', 'small');