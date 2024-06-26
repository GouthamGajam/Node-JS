// console.log("My first nodejs");
// console.log("My first nodejsss");

// const _ = require("lodash");
// const arr = [1, 4, 8, 16];
// console.log(_.chunk(arr));

// const cowsay = require("cowsay");
// console.log(
//     cowsay.say({
//         text: "I am learning NPM ",
//         e: "00",
//         t: "U",
//     })
// );

const { ford,jeep } = require("./car");
console.log(JSON.stringify(ford, null,3));
console.log(JSON.stringify(jeep,undefined,2));
