function solve(input) {
    let horses = input.shift().split('|');

    let commandLine = input.shift().split(' ');

    while (commandLine[0] !== 'Finish') {
        let command = commandLine[0];
        let horse1 = commandLine[1];
        let horse2 = commandLine[2];
        let horse1Position = horses.indexOf(horse1);
        let horse2Position = horses.indexOf(horse2);

        if (command === 'Retake') {

            if (horse1Position < horse2Position) {
                horses[horse1Position] = horse2;
                horses[horse2Position] = horse1;
                console.log(`${horse1} retakes ${horse2}.`);
            }
        }
        
        if (command === 'Trouble') {
            if (horse1Position > 0) {
                horses.splice(horse1Position, 1);
                horses.splice(horse1Position - 1, 0, horse1);
                console.log(`Trouble for ${horse1} - drops one position.`);
            }
        }

        if (command === 'Rage') {
            if (horse1Position === horses.length-2) {
                horses.splice(horse1Position, 1);
                horses.splice(horse1Position+1, 0, horse1);
            } else if(horse1Position <= horses.length - 3) {
                horses.splice(horse1Position, 1);
                horses.splice(horse1Position + 2, 0, horse1);
            }

            console.log(`${horse1} rages 2 positions ahead.`);
        }

        if (command === 'Miracle') {
            let lastHorse = horses.splice(horses[0], 1);
            horses.splice(horses.length, 0, lastHorse);
            console.log(`What a miracle - ${lastHorse} becomes first.`);
        }

        commandLine = input.shift().split(' ');
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}

solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']
)