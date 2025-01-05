// function sayMyName(){
//     console.log("R");
//     console.log("a");
//     console.log("n");
//     console.log("j");
//     console.log("a");
//     console.log("n");
// }
// sayMyName()

// function addTwoNumber(number1,number2){
//         let result = number1 + number2;
//         return result;
// }
// const result=addTwoNumber(3,4)
// console.log("Result :",result);


/*
function LoginUserMassage(username){
            if(!username){
                console.log("Please enter your username!");
                return
            }
            return `${username} just logged in.`
}

console.log(LoginUserMassage("Ranjan Kumar Bharti"));
*/

/*function calculateCardPrice(...num1){
        return num1;
}

console.log(calculateCardPrice(200,300,400,500,600,700))
*/


const user = {
    username:"Ranjan Kumar",
    price:399
}

function handleObject(anyobject){
       console.log(`username is ${anyobject.username} and price :${anyobject.price}`);
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
