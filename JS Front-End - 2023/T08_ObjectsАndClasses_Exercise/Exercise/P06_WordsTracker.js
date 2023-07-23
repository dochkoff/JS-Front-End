function solve(input) {
    [serachedWords, ...words] = input;

    const wordOccurances = serachedWords.split(" ").reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach((word) => {
        if (wordOccurances.hasOwnProperty(word)) {
            wordOccurances[word] += 1;
        }
    });

    const sortedKeys = Object.keys(wordOccurances)
        .sort((a, b) => wordOccurances[b] - wordOccurances[a]);

    for (const key of sortedKeys) {
        console.log(`${key} - ${wordOccurances[key]}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);