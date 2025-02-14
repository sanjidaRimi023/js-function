function add(a, b){
    return a + b;
}
const total = add(4, 5);

function sub(a, b){
    return a - b;
}
const different = sub(13, 3);


console.log(total, different);

//odd number 
// conditional return 
function isOdd(number){
    if(number % 2 == 0){
        return false;
    }
    else{
        return true;
    }
}
// short cut technic
function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    return false; //extra bhabe else likhte hosche na:)
}
console.log('the odd number :', isOdd(32));
console.log('-------------')
console.log('the odd number :', isOdd(43));
console.log('even number site');
console.log(isEven(432));
console.log('-------------')
console.log(isEven(3421));

