function cityInfo(city) {
    let entries = Object.keys(city);
    for (let key of entries) {
        console.log(`${key} -> ${city[key]}`)
    }
}

city = {
    "name": "Plovdiv",
    "area": 389,
    "population": 1162358,
    "country": "Bulgaria",
    "postCode": "4000"
};

cityInfo(city);