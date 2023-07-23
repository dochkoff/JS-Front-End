function solve(input) {
    const carLot = new Set();

    input.forEach(element => {
        const [command, number] = element.split(', ');

        if (command==='IN') {
            carLot.add(number);
        }
        if (command==='OUT') {
            carLot.delete(number);
        }
    });

    const carNumbers = Array.from(carLot).sort();

    if (carLot.size===0) {
        console.log('Parking Lot is empty');
    } else {
        carNumbers.forEach(number => {
            console.log(number);
        })
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);