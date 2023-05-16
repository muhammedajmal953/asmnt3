var readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number to get multiplication number:");
num=parseInt(num)
for (let i = 1; i <=10; i++) {
   console.log(i+" * "+num+" = "+i*num);
}