

// // Empty object
// const car = new Object();
// car.brand = "KIA";
// car.model = "Carnival";
// car.price = 700000;

// // Constructer Function
// function bike(name , price){
//     this.name = name;
//     this.price = price;
//     this.greet = function(){
//         return `Hii my name is ${this.name} and price is ${this.price}`;
//     }
// }

// const bike1 = new bike("KIA-Seltos" , 100000);
// console.log(bike1.name);



// // using create
// const child = {
//     greet(){
//         console.log('hii');
//     }
// }
// const child1 = Object.create(child);


// // using JSON
// const person = `{
//     "name" : "Sahil",
//     "age" : "21"
// }`
 
// let x = JSON.parse(person); 
// console.log(x.name);



//// 1. Arrow Functions

// const add = (a,b) => {
//     return a + b;
// }

// // 2.Anonymous Function
// setTimeout(function(){
//     console.log('2sec');
// },2000);


// // IIFEE Imme
// (function(){
//     console.log('IIFE');
// })();


// // HOF
// // Higher Order Function
// function callGreet(greetfn, name) {
//     return greetfn(name);
// }


// // Normal function passed as argument -> callback function
// function greet(name) {
//     return "Hello " + name;
// }

// // Calling the HOF
// console.log(callGreet(greet, "Sahil"));



// //prototypes;
// Object.prototype.print = function(){
//     console.log('hello');
// }

// let b = {
//     name : 'Abhinav',
//     age : 26
// }
// b.print();




//Promise

let promise = new Promise((resolve , reject) => {
    setTimeout(function(){
        let data = 'hi promise';
        resolve(data);
        let err = 'error aa gya';
        reject(err);
    },3000);
})
promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})