function findRange(a, b) {
    const firstElement = (x, y) => x < y ? x : y;
    const lastElement = (x, y) => x > y ? x : y;

    const start = firstElement(a, b).charCodeAt(0);
    const end = lastElement(a, b).charCodeAt(0);

    let result='';

    for (let index = start+1; index < end; index++) {
        result += String.fromCharCode(index) + ' ';
        
    }
    console.log(result);
}

findRange('a', 'd');
findRange('#', ':');