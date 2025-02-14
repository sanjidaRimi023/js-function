// max between tow number

const rimi = 23;
const binoy = 64;
if(rimi > binoy){
    console.log('Rimi is the biggest');
}
else{
    console.log('binoy is the biggest')
}

// using function 
function getCrown(badhon , uthshob){
    if(badhon > uthshob){
        return badhon;
    }
    else{
        return uthshob;
    }
}
const max = getCrown(64, 95);
console.log('the biggest number is :', max);

// max between three person
 let mahdi = 43;
 let rihan = 98;
 let mahir = 54;
 if(mahdi > rihan && mahdi > mahir){
    console.log('Mahdi is the winner');
 }
 else if (rihan > mahdi && rihan > mahir){
    console.log('Rihan is the winner');
 }
 else{
    console.log('mahir is the winner');
 }

//  using function 

function winner(maidul, rahat, maruf){
    if(maidul > rahat && maidul > maruf){
        return maidul;
    }
    else if(rahat > maidul && rahat > maruf){
        return rahat;
    }
    else{
        return maruf;
    }
}

const topper = winner(54, 654, 643);
console.log('the topper is :', topper);