
// Synchronous code
// console.log("Start");
// let x = 100;
// console.log(x);
// console.log("End");

// // asychronous

console.log("start");

// simulating a connection to an externa server
setTimeout(() => {

    console.log("Fetching Users...");
}, 3000)

console.log("End");