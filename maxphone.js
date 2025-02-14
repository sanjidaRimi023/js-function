const phones = [
    {name : 'Poco', price : 43000, camera : '50mp', color : 'black' },
    {name : 'Samsung', price : 63000, camera : '50mp', color : 'black' },
    {name : 'Iphone', price : 143000, camera : '50mp', color : 'black' },
    {name : 'Techno', price : 13000, camera : '50mp', color : 'black' },
    {name : 'Readme', price : 23000, camera : '50mp', color : 'black' },
    {name : 'Walton', price : 10000, camera : '50mp', color : 'black' },
]

function maxPrice (phones){
    let max = phones[0];
    for(const mobile of phones){
        if(mobile.price > max.price){
            max = mobile;
        }
    }
    return max;
}
const topPhone = maxPrice(phones);
console.log('The most costly phone is :', topPhone);