function solve(num) {
    for (let x = 0; x < num; x++) {
        let row='';

        for (let y = 0; y < num; y++) {
            row += num+' ';  
        }
        
        console.log(row);
    }
}

solve(3);