const goods = [
    { id: 1, name: "Джемпер", description: "Шерстяной, синий", sizes: [40, 42, 44, 46, 48, 50], price: 1500, available: true },
    { id: 2, name: "Платье", description: "Летнее, в цветочек", sizes: [46, 48, 50, 52], price: 2700, available: true },
    { id: 3, name: "Шорты", description: "Белые, джинсовые", sizes: [42, 44, 46, 48, 50, 52, 54], price: 1800, available: true },
    { id: 4, name: "Майка", description: "Шелковая, розовая", sizes: [40, 42, 44], price: 2300, available: true },
    { id: 5, name: "Футболка", description: "Хлопковая, зелёная", sizes: [40, 42, 44, 46, 48, 50, 52, 54], price: 1950, available: false },
]

let card = [
    { good: goods[0], amount: 1 },
    { good: goods[2], amount: 1 },
]

function goodAddToCard(good, amount) {
    if (!good.available) {
        return console.log('Данный товар отсутствует, выберите другой!');
    }
    return card.push({ good: good, amount: amount });
}

function goodDeleteFromCard(pos) {
    return card.splice(pos, 1);
}

function clearCard(pos) {
    return card.splice(pos);
}

function totalCard(card) {
    let totalAmount = 0;
    let totalSumm = 0;
    for (goodInCard of card) {
        totalAmount += goodInCard.amount;
        totalSumm += goodInCard.good.price * goodInCard.amount;
    }
    return { totalAmount: totalAmount, totalSumm: totalSumm };
     
}

goodAddToCard(goods[1], 1);
console.log(card);
clearCard(0);
console.log(card);
goodAddToCard(goods[4], 1);
goodAddToCard(goods[3], 2);
goodAddToCard(goods[0], 1);
goodAddToCard(goods[2], 2);
console.log(card);
goodDeleteFromCard(0);
console.log(card);
goodAddToCard(goods[1], 2);
console.log(card);
goodDeleteFromCard(1);
console.log(card);
console.log(totalCard(card));