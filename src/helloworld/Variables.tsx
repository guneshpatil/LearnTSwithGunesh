// Specifying the type of a variable
let adultAge: number = 18;
let isAdult: boolean = false;

// Functions
function greetIfAdult(age: number) {
    if (decideAge(age)) {
        return `awesome! you have a lot of life experience!`
    } else {
        return `kudos! you are still young!`
    }
}

function decideAge(myAge: number) {
    if (myAge < adultAge) {
        return false;
    }
    return true;
}

console.log(greetIfAdult(14));
console.log(greetIfAdult(25));