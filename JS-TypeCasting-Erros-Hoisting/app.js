
//TypeCasting
// console.log(5 + 'hii'); //5hii
// console.log(undefined+5); //NaN
// let c = console.log(true + 5); //6
// console.log(5 == '5') //true
// console.log(5 === '5') //false

// let a = '5';
// c = Number(a); //Explicit type conversion

// console.log(10+'5');
// console.log(5+'10');



// //Errors -> Errors are the programatical mistake that intruppt compilation of the program.

// let d = 52;
// d.toLowerCase();
// console.log('%%ZZZ'); //typeerror

// try{
//     console.log(10/0);
// }
// catch(Error){
//     console.log(Error);
//     console.log(Error.message);
// }
// finally{
//     console.log('Finally Block');
// }


// Hoisting -> It is a behaviour of javascript where it moves declaration of variable functions and classes to the top of their scope during the compilation phase and before the code is executed.

// console.log(a);
// console.log(b);

// var a = 10;
// let b = 20;

// function test() {
//     console.log("Inside function:", a);
// }
// test();


// d();   // ReferenceError: d is not defined
// d(); //type error -> calling undefined as a function  -> TypeError: d is not a function

// var d = function sub(){
//     console.log(10-10);
// }


// class hoisting

class Student{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);

    }
}
//hoisting in DTZ (Dead Termporal Zone);
// stud1.show();
// const stud1 = new Student('abhinav' , 21);

const stud1 = new Student('abhinav' , 21);
stud1.show();
















