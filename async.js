// //sunchronuse 

// console.log("HELLO");
// console.log("HELLO AGAIN");

// //A sunchronuse 
// setTimeout(() => {
//     console.log("WELL COME");
// }, 1000);

// // setInterval(() => {
// //     console.log("GOOD BY");
// // }, 2000);

// let a = 5
// let b = 5
// console.log(a + b)


// Call Back Function

// function FullName(fname,lname,cb) {
//     console.log(fname + lname)
//     cb()
// }

// function FatherName() {
//     console.log("Anjum Khan");
// }

// FullName("Hanzala "," Khan ", FatherName);


// function Math(num1,num2,cb ) {
//     console.log(num1 + num2)
//     cb()
// }


// function Equal(math) {
//     console.log(20);
// }

// console.log(5 , 15, Equal);
// function CreatAccount(cb) {

//     setTimeout(() => {
//         cb();
//         // console.log("Registration Complete");
//     }, 1000);

//     function Login(cb) {
//         setTimeout(() => {
//             cb();
//             // console.log("SuccessFully Login");
//         }, 2000);

//     }

//     function DataCollected(cb) {
//         setTimeout(() => {
//             cb();
//             // console.log("Data Collected");
//         }, 2500);

//     }

//     function DataDisplayed(cb) {
//         setTimeout(() => {
//             cb();
//             // console.log("Data Displayed On Browser")
//         }, 3000);

//     }

// }
// // Call Back Hell
// CreatAccount(function () {
//     console.log("Registration Complete");
//     Login(function () {
//         console.log("SuccessFully Login");
//         DataCollected(function () {
//             console.log("Data Collected");

//             DataDisplayed()
//         });
//     });
// });
// class Parent {
//     constructor(name, age, qualification) {
//         this.Name = name,
//             this.Age = age,
//             this.Qualification = qualification;
//         this.markAttendence = [];
//     }
//     attendence() {
//         this.markAttendence.push(new Date());
//     }
//     message() {
//         console.log("this is parent class");
//     }
// }

// class child extends Parent {
//     constructor(name, age, qualification) {
//         super(name, age, qualification);
//     }
// }

// let person = new Parent("Zain", 40, "Master")
// let Child = new child("Haziq", 17, "Matric")
// console.log(person)
// console.log(Child)
// person.message()
// person.attendence()
// Child.attendence()


// Asynchronous & Call Back Function

// function registration(cb){
//     setTimeout(function(){
//         cb()
//     },1000)
// }

// function login(cb){
//     setTimeout(function(){
//         cb()
//     },2000)
// }

// function dataGet(cb){
//     setTimeout(function(){
//         cb()
//     },1500)
// }

// function dataDisplay(){
//     setTimeout(function(){
//         console.log("Data Displayed")
//     },1000)
// }

// registration( function(){
//     console.log("Registration Succesfull")
//     login(function(){
//         console.log("login Successfull")
//         dataGet(function(){
//             console.log("Data Gotted")
//         });
//         dataDisplay();
//     });
// });

// callback function

// function Fullname(fname,lname,cb){
//     console.log(fname + lname );
//     cb();
// }

// function Surname(){
//     console.log("Syed")
// }

// Fullname("Muhammad Zain"," Sarfraz",Surname)

// synchronous Functiuon

// console.log("hello")
// console.log("hello world")
// console.log("hello again")

// Asynchronous Function

// function zain(data,data2){
//     setTimeout(function(){
//         console.log("Syed"+"Sarfraz")
//     },500)
// }
// zain()


// function add(cb) {
//     console.log(25 + 60)
//     cb();
// }

// function multi() {
//     console.log(25 * 59);
// }

// add(multi)

// promises in js

// function prom(states){
//     return new Promise(function(resolve,rejected){
//         if(states){
//             resolve("Promise fullfilled")
//         }
//         else{
//             rejected("Rejected due to some error")
//         }
//     })
// }

// // direct simple

// let a = prom(true)
// // let a = prom(false)
// console.log(a)

// function fullfilled(result){
//     console.log(result)
// }

// function Rejected(error){
//     console.log(error)
// }

// // simple call
// prom(false).then(result)
// prom(false).catch(error)

// //method chaining 
// prom(false).then(function fullfilled(result){console.log(result)}).catch(function Rejected(error){console.log(error)})

// // arrow function
// prom(true).then(result => console.log(result)).catch(error => console.log(error))


// // pending states
// function prom(states){
//     console.log("please wait")
//     return new Promise(function(resolve,rejected){
//     setTimeout(function(){
//             if(states){
//                 resolve("Promise fullfilled")
//             }
//             else{
//                 rejected("Rejected due to some error")
//             }
//         })
//     },2000)
// }

// async, await

async function Getaddition() {
    console.log("Addition of two number")

    let a = 87;
    let b = 35;
    let c = 90;
    let d = 20
    let e = 40
    let result = a + b * c - d / e;
    await console.log("please wait");
    return result
}

// let a = Getaddition()
// console.log(a)
Getaddition().then(result => console.log(result)).catch(error => console.log(error))
console.log("hello")