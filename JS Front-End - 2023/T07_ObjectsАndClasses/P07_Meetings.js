function meeting(input) {
    const agendaObj = input.reduce((acc, curr)=>{
        const [day, name]=curr.split(' ');

        if (acc[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            acc[day] = name;
            console.log(`Scheduled for ${day}`);
        }

        return acc;
    }, {});
    
    let keys = Object.keys(agendaObj);
    for (let key of keys) {
        console.log(`${key} -> ${agendaObj[key]}`);
    }
}

meeting(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);

// OUTPUT
// Scheduled for Friday
// Scheduled for Saturday
// Scheduled for Monday
// Conflict on Monday!
// Scheduled for Wednesday
// Friday -> Bob
// Saturday -> Ted
// Monday -> Bill
// Wednesday -> George