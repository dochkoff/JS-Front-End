function solve(input) {
    let numberOfRiders = input.shift();

    let riders = [];

    for (let i = 0; i < numberOfRiders; i++) {
        let rider = input.shift().split('|');

        if (Number(rider[1]) > 100) {
            rider[1] = 100;
        }

        if (Number(rider[1]) < 0) {
            rider[1] = 0;
        }

        riders.push(rider)
    }

    let commandLine = input.shift().split(' - ');

    while (commandLine[0] !== 'Finish') {
        let command = commandLine[0];
        let rider1Name = commandLine[1];

        if (command === 'StopForFuel') {
            let minFuel = Number(commandLine[2]);
            let chngPosition = commandLine[3];

            riders.forEach((rider) => {
                if (rider[0] === rider1Name) {

                    if (Number(rider[1]) < minFuel) {
                        rider[2] = chngPosition;
                        console.log(`${rider1Name} stopped to refuel but lost his position, now he is ${chngPosition}.`);
                    }
                    if (Number(rider[1]) >= minFuel) {
                        console.log(`${rider1Name} does not need to stop for fuel!`);
                    }
                }
            })

        } else if (command === 'Overtaking') {
            let rider2Name = commandLine[2];

            let rider1;
            let rider2;
            let rider1Index;
            let rider2Index;
            let rider1Posion;
            let rider2Posion;

            riders.forEach(rider => {
                if (rider[0] === rider1Name) {
                    rider1 = rider;
                    rider1Posion = rider[2];
                    rider1Index = riders.indexOf(rider);
                }
                if (rider[0] === rider2Name) {
                    rider2 = rider;
                    rider2Posion = rider[2];
                    rider2Index = riders.indexOf(rider);
                }
            })

            if (rider1Index < rider2Index) {
                let rider1NewPosition = rider2Posion;
                rider2[2] = rider1Posion;
                rider1[2] = rider1NewPosition;

                riders.splice(rider1Index, 1);
                riders.splice(rider1Index + 1, 0, rider1);
                console.log(`${rider1Name} overtook ${rider2Name}!`);
            }
        } else if (command === 'EngineFail') {
            let rider1;
            let rider1Posion;
            let lapsLeft = commandLine[2];

            riders.forEach(rider => {
                if (rider[0] === rider1Name) {
                    rider1 = rider;
                    rider1Posion = riders.indexOf(rider);
                    riders.splice(rider1Posion, 1);
                    console.log(`${rider1Name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                }
            })
        }

        commandLine = input.shift().split(' - ');
    }

    riders.forEach(rider => {
        console.log(`${rider[0]}`);
        console.log(`   Final position: ${rider[2]}`);
    })
}

solve(["3",
    "Valentino Rossi|200|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
