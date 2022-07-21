// normal javascript function
function myNormalFunction() {
    return 'my normal function'; 
}

console.log(myNormalFunction());

// arrow function 
const myArrowFunction = () => {
    return 'my arrow function';
}

console.log(myArrowFunction());


// example 1 
const printInfo = (name, age) => {
    console.log('My name is ' + name + ' and I have ' + age + ' years old.');
}

printInfo('Grazielle', 28); 

// example 2
const multiply = number => number * 2; 
console.log(multiply(4));