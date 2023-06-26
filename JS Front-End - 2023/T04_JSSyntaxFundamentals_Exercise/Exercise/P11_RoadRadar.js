function radar(currentSpeed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    let currentSpeedLimit = speedLimits[area];
    let speedDifference = currentSpeed - currentSpeedLimit;
    let state;
    
    if (speedDifference <= 0) {
        console.log(`Driving ${currentSpeed} km/h in a ${currentSpeedLimit} zone`);
        return;
    }

    if (speedDifference>40) {
        state = `reckless driving`;
    }
    else if (speedDifference > 20) {
        state = `excessive speeding`;
    }
    else {
        state = `speeding`;
    }

    console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${currentSpeedLimit} - ${state}`)
}

radar(40, 'city');
radar(21, 'residential');