let a = +prompt ("Enter first number");
let b = +prompt ("Enter second number");
let largeNum=Math.max(a,b);
let smallNum=Math.min(a,b);
let remainder=(largeNum%smallNum);
if (remainder==0){
    console.log("1");
    }
else{
    console.log("0");
}
