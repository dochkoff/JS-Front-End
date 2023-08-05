function adressBook(personsInfo) {
    const personObj=personsInfo.reduce((acc, curr)=>{
        const [name, adress] = curr.split(':');
        acc[name] = adress;
    
        return acc;
    }, {});

    let keys = Object.keys(personObj).sort();

    for (let key of keys) {
        console.log(`${key} -> ${personObj[key]}`);
    }
}

adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);