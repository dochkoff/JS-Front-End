function cooking(number, ...commands) {
    let result = Number(number);

    for (let index = 0; index < commands.length; index++) {
        let command = commands[index];

        switch (command) {
            case `chop`:
                result /=2;
                break;
            case `dice`:
                result = Math.sqrt(result);
                break;
            case `spice`:
                result += 1;
                break;
            case `bake`:
                result *=3;
                break;
            case `fillet`:
                result -= result*0.2;
                break;
        }
        
        console.log(result);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');

cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')