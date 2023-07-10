function solve(names) {
    let employeesData = names.reduce((acc, curr)=>{
        let name = curr;
        let number = curr.length;
        acc[name] = number;
        return acc;
    }, {});

    let keys = Object.keys(employeesData);

    for (const key of keys) {
        console.log(`Name: ${key} -- Personal Number: ${employeesData[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);