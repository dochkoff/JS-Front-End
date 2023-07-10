function towns(input) {
    input.map((towns) => {
        let [town, latitude, longitude] = towns.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        return { town,latitude,longitude};
    })
        .forEach((towns) =>{
            console.log(towns);
        });
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);