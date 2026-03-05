// //Task 1
// function countEvenOdd(n) {
//     let evenCount = 0;
//     let oddCount = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }

//     console.log("Even numbers:", evenCount);
//     console.log("Odd numbers:", oddCount);
// }
// countEvenOdd(10);

// //Tassk 2

// function reverseNumber(num) {
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;       
//         reversed = reversed * 10 + digit; 
//         num = Math.floor(num / 10); 
//     }

//     console.log("Reversed number:", reversed);
//     return reversed;
// }
// reverseNumber(1234);

// //Tsk 3
// function largestDigit(num) {
//     let largest = 0;

//     while (num > 0) {
//         let digit = num % 10;       
//         if (digit > largest) {
//             largest = digit;
//         }
//         num = Math.floor(num / 10); 
//     }

//     console.log("Largest digit:", largest);
//     return largest;
// }
// largestDigit(58392);

// //TAsk 4

// function sumOfDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;       
//         sum += digit;               
//         num = Math.floor(num / 10);
//     }

//     console.log("Raqamlar yig‘indisi:", sum);
//     return sum;
// }
// sumOfDigits(1234);

// //Task 5

// function countDigits(num) {
//     let count = 0;

//     while (num > 0) {
//         num = Math.floor(num / 10); 
//         count++;                    
//     }

//     console.log("Raqamlar soni:", count);
//     return count;
// }
// countDigits(12345);



// 1


// let a = 3;
// let b = -7;
// let c = 2;

// if (a * b * c > 0) {
//     alert("The sign is +");
// } else if (a * b * c < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }


// 2


// let a = 0;
// let b = -1;
// let c = 4;


// let number = prompt("Enter the first number:");

// while( number >= 18) {
//     console.log("welcome");
// }





// Lesson 4


// task 1

// let a = 10;
// let b = 29;

// if( a > b ){
//     console.log("a bigger than b");
// }else if(a == b){
//     console.log(" same");
// }else {
//     console.log("b bigger than a");
// }


// task 2

// let a  = -10
// let a =  prompt("enter the first number");
// // let b = 20
// let b = prompt("enter the second number");
// // let c = -1
// let c = prompt("enter the third number");

// let minusCount = 0

// if(a < 0 ){
//     minusCount++
// }
//  if (b < 0){
//     minusCount++
// }
//  if (c < 0){
//     minusCount++
// }

// if(minusCount % 2 === 0){
//     console.log("+");

// }else if (minusCount % 2 !== 0){
//     console.log("-");
// }


// log log




// lesson 5 practise 

// function sayHello(){
//     console.log("hello!!");
// }

// sayHello()


// function test(){
//     let name = "ali"
//     console.log(name);      
// }

// test()



// function outer() {
//     let number = 5

//     function inner() {
//         console.log(number);
//     }

//     return inner;
// }

// let result = outer();
// result();


function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const add = counter();

add();
add();
add();  
add()