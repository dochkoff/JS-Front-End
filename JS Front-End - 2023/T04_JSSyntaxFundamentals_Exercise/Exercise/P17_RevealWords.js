function revealWords(words, sentace) {
    const wordsArr = words.split(", ");
    const sentaceArr = sentace.split(" ");

    for (let index = 0; index < sentaceArr.length; index++) {
        if (sentaceArr[index].includes("*")) {
            for (let i = 0; i < wordsArr.length; i++) {
                if (sentaceArr[index].length === wordsArr[i].length) {
                    sentaceArr[index] = wordsArr[i];
                }
            }
        }
    }
    console.log(sentaceArr.join(" "));
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');