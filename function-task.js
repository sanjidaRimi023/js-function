// Task-1
// Take four parameters. Multiply the four numbers and then return the result.
function total(a, b, c, d){
    console.log('total of sum');
    let sum = a * b * c * d;
    console.log(sum);
}
total(3, 4, 6, 8);

//Task-2
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddNum(num){
    if(num % 2 != 0){
        let odd = num * 2;
        return odd;
    }
    else{
        let even = num / 2;
        return even;
    }
}
console.log('the odd number is:', oddNum(43));
console.log('the even number is:', oddNum(12));


//Task-3
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

//Task-4
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

//Task-5
//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd