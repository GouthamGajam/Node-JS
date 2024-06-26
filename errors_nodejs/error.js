//Error Object
const error = new Error("Something went wrong");
// console.log(error.stack);
// console.log(error.message);
// throw new Error("I am error object");

const{CustomError} = require("./customError");
//throw new CustomError("This is a custom error, we can keep anything")
//////// This is handle exception using try and catch

try{
    doSomething();
} catch(e){
    console.log("Error Occured");
    console.log(e);
}
function doSomething(){
    const data = fetch("localhost:5500/api");
    console.log("I am from doSmtg func")
}

// Exceptions with promises
const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
});

promise.then((val)=>{
    console.log(val);
}).catch((err) => {
    console.log("Error Occured");
    console.log(error);
});

const someFunction = async()=>{
    try{
        await doSomething();
    } catch(err){
        throw new CustomError(err.message);
    }
};
someFunction();