//leep year test

//simple case
function leepyear(year){
    if(year / 4 ){
        return true;
    }
    else{
        return false;
    }
}
const isleepyear = leepyear(2432);
console.log(isleepyear);

//those year that is divisable by 100 and if the year that is divisible by 4 ---> then it will be leep year.