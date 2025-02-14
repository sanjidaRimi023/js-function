const heights = [12, 32, 45, 54, 57, 87, 53, 45];
function max(number){
    for(const num of number){
        console.log(num);
    }
}
const getMax = max(heights);
console.log('the array is :', getMax);

// maximum result

const number = [12, 32, 45, 54, 57, 87, 53, 45];

function maxnum(number){
    let max = number[0];
    for(const num of number){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const topmax = maxnum(number);
console.log('the max number is :', topmax);

