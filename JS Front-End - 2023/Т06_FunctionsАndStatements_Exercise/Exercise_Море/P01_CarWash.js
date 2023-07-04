function carWash(commands) {
    machine = {
        soap: (x) => x + 10,
        water: (x) => x * 1.2,
        "vacuum cleaner": (x) => x * 1.25,
        mud: (x) => x * 0.9,
    };

    let cleanStatus = 0;

    for (let index = 0; index < commands.length; index++) {
        let command = commands[index];
        cleanStatus = machine[command](cleanStatus);
    }

    console.log(`The car is ${cleanStatus.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);