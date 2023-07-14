function sumTable() {
    let productPrices = Array.from(document.querySelectorAll('td:nth-child(2)'));
    let sum = 0;

    for (let price of productPrices) {
        sum += Number(price.textContent);
    }

    document.getElementById('sum').textContent = sum;
}