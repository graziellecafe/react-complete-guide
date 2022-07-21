/* 
spread: used to split up array elements OR object properties
example: 
const newArray = [...oldArray, 1, 2]; 
const newObject = [...oldObject, newProp: 5]; 


rest: Used to merge a list of function arguments into an array
example: 
function sortArgs(...args) {
    return args.sort();
}
*/


// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);


const person = { 
    name: 'Grazi'
}

const infoPerson = {
    ...person,
    age: 28
}

console.log(infoPerson);

// rest operator
const filter = (...args) => {
    return args.filter(element => element === 1);
}

console.log(filter(2, 1, 4, 2, 1, 7));