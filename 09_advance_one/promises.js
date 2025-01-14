// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async promises complete..")
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve({username:"ranjan",email:'abcd@example.com'})
//       },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour = new Promise(function(resolve,reject){
//          setTimeout(function(){
//             let error
//             if (error!=true) {
//                 resolve({username:"Ranjan",Password:"12345"})
//             }else{
//                 reject('ERROR: Something went wrong');
//             }
//          },1000)
// })

// promiseFour.then(function(user){
//         console.log(user)
//         return user;
// })
// .then(function(user){
//     console.log(user.username)
//     return user
// }).then(function(user){
//     console.log(user.Password)
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"));



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//           let error = false
//           if(!error){
//             const url = 'https://api.github.com/users/RanjanKumarBharti'
//             resolve(url)
//           }else{
//             reject("ERRO:Somethins is wrong")
//           }
//     },1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive();

// async function AllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E : ", error)
//     }
// }

// AllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
