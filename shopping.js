function shop(shirt, pant, shoes){
    const perShirt = 500;
    const perPent = 300;
    const perShoes = 900;

    const totalShirt = shirt * perShirt;
    const totalPent = pant * perPent;
    const totalShoes = shoes * perShoes;

    const total = totalShirt + totalPent + totalShoes;
    return total;
}
const shopping = shop(4, 2, 2);
console.log(shopping);