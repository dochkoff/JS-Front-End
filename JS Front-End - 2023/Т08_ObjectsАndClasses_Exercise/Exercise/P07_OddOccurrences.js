function solve(input) {
    const words = input.toLowerCase().split(" ");
    const wordOccurances = words.reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach((word) => {
        if (wordOccurances.hasOwnProperty(word)) {
            wordOccurances[word] += 1;
        }
    });

    const oddOccurrences = [];
    const sortedKeys = Object.keys(wordOccurances)
        .sort((a, b) => wordOccurances[b] - wordOccurances[a]);

    for (const key of sortedKeys) {
        if (wordOccurances[key]%2!==0) {
            oddOccurrences.push(key);
        }
    }

    console.log(oddOccurrences.join(' '));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");