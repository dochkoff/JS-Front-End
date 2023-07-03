function loading(percent) {
    let bar = '';

    if (percent === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }


    for (let index = 10; index <= percent; index+=10) {
        bar += '%';  
    }

    for (let index = 0; index < 100-percent; index+=10) {
        bar += '.';  
    }

    console.log(`${percent}% [${bar}]`);
    console.log(`Still loading...`);
}

loading(100);