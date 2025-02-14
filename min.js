const phonesPrices = [12000, 154000, 21000, 113000, 120000, 10000, 126000, 32000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const lowNumber = getMin(phonesPrices);
console.log('the lowest number is : ' , lowNumber);