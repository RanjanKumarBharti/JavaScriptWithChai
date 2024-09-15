// Primitive

// 7 types : String , number, Boolean , Null , undefined, Symbol,BigInt

const score = 100;
const scoreVlue = 100.3;
const isLoggedIn = false;
const outsideTemp= null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

// const bigNumber = 389489457547453987435n
// console.log(bigNumber);
//Reference (No primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
const details = {
    name  : "ranjan",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros);



//**************************************** */
// Stack (Primitive), Heap (Non-primitive)

let myName = "RanjanKumarBharti"
let anothername = myName
anothername = "RanjanKumar"
console.log(myName);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi : "9142008513@aybl"
}

let userTwo = userOne;
userTwo.email= "rk@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

