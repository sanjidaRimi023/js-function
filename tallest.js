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
    let maxnum = number[0];
    for(const num of number){
        if(num > maxnum){
            maxnum = num;
        }
    }
    return maxnum;
}
const topmax = maxnum(number);
console.log('the max number is :', topmax);

