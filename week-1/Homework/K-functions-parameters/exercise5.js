// Declare your function here
function createLongGreeting(name , age){
    let person = `Hello, My name is ${name} and I am ${age} year old.`
    return person
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
