var readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number:");
if (num%2==0) {
    console.log("the number you have entered is even");
    
}
else
{
    console.log("the number you have enterd is odd");
}
