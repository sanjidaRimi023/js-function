function height(inch) {
    const feet = inch / 12;
    return feet;
}

const rihanHeight = height(75);
console.log(rihanHeight);

// other option



function heightnum(inch){
    const feetmark = inch / 12;
    const feetnumber = parseInt(feetmark);
    const inchremaineing = inch % 12;
    const result = feetnumber + ' ft ' + inchremaineing + ' inch. '
    return result;
}
const rimiheight = heightnum(83);
console.log(rimiheight);


console.log('box size :')


function size(feet){
    const fullSize = feet / 12;
    const sizeInteger = parseInt(fullSize);
    const sizeInch = feet % 12;
    const totalSize = sizeInteger + ' ft ' + sizeInch + ' inch '
    return totalSize;
}
const boxSize = size(546);
console.log(boxSize);