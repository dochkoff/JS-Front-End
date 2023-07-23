function solve(input) {
    input.map((heroes) => {
        let [heroName, heroLevel, items] = heroes.split(' / ');
        heroLevel = Number(heroLevel);
        return { heroName, heroLevel, items };
    })
        .sort(function (a, b) {
        return a.heroLevel - b.heroLevel;
        })
        .forEach((heroes) => {
            console.log(`Hero: ${heroes.heroName}`);
            console.log(`level => ${heroes.heroLevel}`);
            console.log(`items => ${heroes.items}`);
        });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'
]);