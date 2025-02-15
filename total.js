const products = [
    { name : 'shirt', price : 1000 },
    { name : 'pant', price : 1200 },
    { name : 'T-shirt' , price : 700 }
]
function shoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total; 
}

const total = shoppingTotal(products);
console.log('total amount is :', total);