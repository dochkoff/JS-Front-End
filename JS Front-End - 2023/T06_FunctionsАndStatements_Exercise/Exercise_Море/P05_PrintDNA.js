function printDNA(repeat) {
    const gens = [
        ["A", "T"],
        ['C', 'G'],
        ['T', 'T'],
        ['A', 'G'],
        ['G', 'G'],
    ];

    for (let index = 0 ; index < repeat; index++) {
        const [x, y] = gens[index % gens.length];

        if (index%4===0) {
            console.log(`**${x}${y}**`)
            continue;
        }

        if (index %2=== 1) {
            console.log(`*${x}--${y}*`)
            continue;
        }

        if (index % 2 === 0) {
            console.log(`${x}----${y}`)
            continue;
        }
    }
}

printDNA(10);