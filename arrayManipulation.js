let arr = [1, 2, 3, 4, 5];
let el = 7;
let pos = 3;

//Finding Element in an Array
const findElement = (element, array) => {
    let n = array.length
    for (let i = 0; i < n; i++) {
        if(element === arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(`Finding an Element:`);
findElement(el, arr) >= 0 ? console.log(`${el} was found at index ${findElement(el, arr)}`) : console.log(`${el} was not found.`);
console.log(`[${arr}]`);

//Inserting Element in an Array

const insertElement = (element, array, position) => {
    let n = array.length
    for (let i = n - 1; i >= position; i--) {
        array[i + 1] = array[i];
        
    }
    array[position] = element;
}

const insertAtStart = (element, array) => {
    let n = array.length
    for (let i = n - 1; i >= 0; i--) {
        array[i + 1] = array[i];
        
    }
    array[0] = element;
}

const insertAtEnd = (element, array) => {
    let n = array.length
    for (let i = array.length - 1; i >= n; i--) {
        array[i + 1] = array[i];
        
    }
    array[n] = element;
}

console.log(`\nInserting an Element:`);
console.log(`${el} Inserted at index ${pos}`);
insertElement(el, arr, pos);
console.log(`[${arr}]`);

// console.log(`\nInserting Element at Start:`);
// console.log(`${el} Inserted at start`);
// insertAtStart(el, arr);

// console.log(`\nInserting Element at End:`);
// console.log(`${el} Inserted at End`);
// insertAtEnd(el, arr);

//Deleting Element in an Array
const deleteElement = (element, array) => {
    let n = array.length
    let position = findElement(element, array);
    for (let i = position; i < n; i++) {
        array[i] = array[i + 1];
    }
    array.length = n - 1;
}

console.log(`\nDeleting an Element:`);
console.log(`${el} Deleted`);
deleteElement(el, arr);

console.log(`[${arr}]`);