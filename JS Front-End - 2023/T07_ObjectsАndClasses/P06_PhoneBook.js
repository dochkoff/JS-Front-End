function createPhBook(input) {
    const phoneObj = input.reduce((acc, curr) => {
        const [name, phone] = curr.split(' ');
        acc[name] = phone;

        return acc;
    }, {});

    let keys=Object.keys(phoneObj);
    for (let key of keys) {
        console.log(`${key} -> ${phoneObj[key]}`);
    }
}

createPhBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
