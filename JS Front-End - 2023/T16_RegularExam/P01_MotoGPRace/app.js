function solve(input) {
    let numberOfRiders = input.shift();
    let riders = [];

    for (let index = 0; index < numberOfRiders; index++) {
        const inputInfo = input.shift().split(`|`);
        const riderName = inputInfo[0];
        const fuelCapacity = Number(inputInfo[1]);
        const riderPossition = Number(inputInfo[2]);
        
        if(!riders.hasOwnProperty(riderName)){
            riders[riderName] = {fuelCapacity,riderPossition};
        }
    }

    const ridersNames = Array.from(Object.keys(riders));

    let commandLine = input.shift().split(' - ');

    while (commandLine[0] !== 'Finish') {
        let command = commandLine[0];

        if (command === 'StopForFuel') {
            let rider = commandLine[1];
            let minFuel = Number(commandLine[2]);
            let newPosition = Number(commandLine[3]);

            if (riders[rider].fuelCapacity < minFuel) {
                riders[rider].riderPossition = newPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${newPosition}.`);
            }
            else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (command === 'Overtaking') {
            let rider1=commandLine[1];
            let rider2=commandLine[2]
            let rider1Posion=riders[rider1].riderPossition;
            let rider2Posion=riders[rider2].riderPossition;

            if (rider1Posion < rider2Posion) {
                riders[rider1].riderPossition=rider2Posion;
                riders[rider2].riderPossition=rider1Posion;

                console.log(`${rider1} overtook ${rider2}!`);
            }
        } else if (command === 'EngineFail') {
            let rider=commandLine[1];
            let lapsLeft = commandLine[2];
            let riderIndex = Object.keys(riders).indexOf(rider);
            ridersNames.splice(riderIndex, 1);
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }

        commandLine = input.shift().split(' - ');
    }

    ridersNames.forEach(riderName => {
    console.log(`${riderName}`);
    console.log(`   Final position: ${riders[riderName].riderPossition}`);
    });
}

solve(["3",
    "Valentino Rossi|200|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
