function solve(text) {
    const result = text
        .toUpperCase()
        .split(/[\W]+/)
        .filter((w) => w!=="")
        .join(", ")
    console.log(result);
}

solve('Hi, how are you?');