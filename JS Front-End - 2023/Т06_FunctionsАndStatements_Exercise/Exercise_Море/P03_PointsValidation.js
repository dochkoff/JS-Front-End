function validity(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    function calculateDistance() {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isDistanceValid(x1, y1, x2, y2) {
        const distance = calculateDistance(x1, y1, x2, y2);
        const isValid = Number.isInteger(distance);
        const status = isValid ? "valid" : "invalid";

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
    }

    isDistanceValid(x1, y1, 0, 0);
    isDistanceValid(x2, y2, 0, 0);
    isDistanceValid(x1, y1, x2, y2);
}

validity([3, 0, 0, 4]);