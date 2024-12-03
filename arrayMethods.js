//Array Most important Methods

//Map method  //It is similar to forEach but it returns a new array.
let arr = [0,1,2,3,4,5,6,7,8,9,10];

let maparr = arr.map((val) => { //returns Array
    return val;
});

//filter method  //It filters out the values based on a condition which returns a true stores in the new array
let evenarr = arr.filter((val) => { //returns Array with true values
    return val % 2 === 0;
});

//reduce method //Performs operations and returns a single value.
//find the largest number from the array.

arr2 = [22,66,10,5,6,42,37];
let max = arr2.reduce((prev, curr) => { //returns a value
    return prev > curr ? prev : curr;
});

let min = arr2.reduce((prev,curr)=>{ //returns a value
    return prev < curr ? prev: curr;
})


//filter the marks of students that are 80+
let marks = [50,20,30,80,81,90,94,22,40,50,85];
let maxMarks = marks.filter((val) => {
    return val >= 80;
});

//Create the array of numbers n and find the factorial using reduce method.
let n = 5;
let arr3 = [];

//Storing the number from 1 to n in the arr3
for(let i = 0;i < n;i++){
    arr3[i] = i + 1;
}
let fact = arr3.reduce((prev, curr) => {
    return prev * curr;
});
console.log(`Factorial: ${fact}`);

console.log('\nConverting lowerCase to UpperCase:');

 //Normal Function
 function countVowel(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i of str) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count++;
        }
    }
    console.log(count);
}

//Arrow Function
const countVowels = (str) => {
    let count = 0;
    str = str.toLowerCase();
    for (let i of str) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count++;
        }
    }
    console.log(count);
}

//Higher Order Functions are those functions that passes a function as a parameter or returns a function.

//ForEach Loop     //It is a loop that passes a function as an argument
const vowels = ["a","e","i","o","u"];
vowels.forEach((val) => {
    console.log(val + " UpperCase to " + val.toUpperCase());
});

//Print square of number from array using forEach loop
console.log("\nSquare of Numbers:");
const number = [2,4,6,7,9,11];
number.forEach((val) => {
    console.log(val + " = " + val**2);
});

//Array Methods

//push and pop
console.log('\nPush and Pop Array Methods:');
arr = ['Netflix', 'Amazon', 'Disney', 'Hulu'];
arr.push('Uber'); //Add Uber at the end
console.log(arr);
let deleted = arr.pop(); //Delete the last element
console.log(`Deleted ${deleted}`);
console.log(arr);

//unshift and shift
console.log('Unshift and Shift Array Methods:');
arr.unshift('Uber'); //Add Uber at start
console.log(arr);
deleted = arr.shift(); //Delete the first Element
console.log(`Deleted ${deleted}`);
console.log(arr);

//slice and splice      //splice(starting index, delete items, add items)
console.log('Slice and Splice Array Methods:');
console.log(arr.slice(1, 3)); //Breaks the array or string

//Replace
console.log(`\n${arr}`);
console.log(`Replace element at index 1`);
arr.splice(1, 1, 'Uber');
console.log(arr);
//Delete
console.log(`Delete two elements`);
arr.splice(0,2);
console.log(arr);
//Add
console.log(`Add two elements at index 0`);
arr.splice(0,0,'Prime Video','Panaflix');
console.log(arr);
