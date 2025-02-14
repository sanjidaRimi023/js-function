// basic of function:
const money = 43;
function fanOff(){
    console.log('uthe fan er kace jao');
    console.log('fan er switch off kro');
    console.log('abr nijer jaygay fire aso');
}
fanOff();

//given Square using function

function Square (number){
    console.log('the value of number is: ', number);
    const double = number * number;
    console.log('the value number double is :', double);
}
Square(43);
Square(433);
Square(4);
Square(3);

//added to number using function
console.log('--------------')

function added (num1 , num2){
    console.log('the first number is :', num1);
    console.log('the second number is :', num2);
    let total = num1 + num2;
    console.log('the total number is :', total);    
}

added(3, 5);
added(4, 65);
added(6, 45);
console.log('---------------');


// using argument in function
function doubleIt(number){
    console.log('the double number :');
    doubled = (number * 4);
    console.log(number, doubled);
}
doubleIt(43);
doubleIt(47);
doubleIt(467);
doubleIt(4733);

console.log('--------');
const taka = 54;
doubleIt(taka);
const sum = 93;
doubleIt(sum);