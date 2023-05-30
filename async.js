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
function CreatAccount(cb) {

    setTimeout(() => {
        cb();
        // console.log("Registration Complete");
    }, 1000);

    function Login(cb) {
        setTimeout(() => {
            cb();
            // console.log("SuccessFully Login");
        }, 2000);

    }

    function DataCollected(cb) {
        setTimeout(() => {
            cb();
            // console.log("Data Collected");
        }, 2500);

    }

    function DataDisplayed(cb) {
        setTimeout(() => {
            cb();
            // console.log("Data Displayed On Browser")
        }, 3000);

    }

}
// Call Back Hell
CreatAccount(function () {
    console.log("Registration Complete");
    Login(function () {
        console.log("SuccessFully Login");
        DataCollected(function () {
            console.log("Data Collected");

            DataDisplayed()
        });
    });
});