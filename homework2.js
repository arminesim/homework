//task 1
let value = +prompt ("enter number")
let sum = 0;
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
console.log(sum);

//task 2
let side1 = +prompt ("enter the first number")
let side2 = +prompt ("enter the second number")
let side3 = +prompt ("enter the third number")
if (side1+side2>side3&&side2+side3>side1&&side1+side3>side2){
   console.log("yes") 
}
else {
	console.log("no")
}

//task 3
let number = +prompt ("enter number");
let digit = +prompt ("enter digit to count");
let digitCount = 0;
while (number > 0) {
    let currentDigit = number % 10;
    if (currentDigit === digit) {
        digitCount++;
    }
    number = (number - currentDigit) / 10;
}
console.log('Number has ' + digitCount + ' digits ' + digit +'.');

//task 4
let number = +prompt ("enter number");
let result = 0;
let resultStr = "";
while (number > 0) {
    let currentDigit = number % 10;
    number = (number - currentDigit) / 10;
    result = (result*10+currentDigit);
    resultStr = resultStr+currentDigit;
}
console.log(result)
console.log(resultStr)

//task 5
let number = +prompt ("enter number");
while (number%2==0) {
    number = number/2;
}
console.log(number==1);

//task 6 (print X)
let columnCount = +prompt ()
let rowCount = columnCount
let matrix = ''
for (let i=0; i<rowCount; i++){
        let row = ''
	for (let j=0; j<columnCount; j++){
    	if (i==j || i+j==columnCount-1) {
   		 	row+='*'
 		}   
    	else {
       		row += " "
        }
	}
	matrix+=row+'\n'
}
console.log(matrix)