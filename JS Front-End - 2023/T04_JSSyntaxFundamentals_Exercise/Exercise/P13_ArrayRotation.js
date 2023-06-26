function rotation(arr, rotations) {
    for (let index = 0; index < rotations; index++) {
        arr.push(arr.shift());
    }

    console.log(arr.join(" "))
}

rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);