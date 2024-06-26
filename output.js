// const x="1";
// const y="2";
// console.log(x,y);

// %s format for variable to String
// %d for Number
// %i for interger
// %o for object 


// console.log("I am %s my age is %d", "Goutham", 20.4);
// console.clear();
// console.count("I am GajamG");
// console.count("I am GajamG");
// console.count("I am Goutham");
// console.countReset("I am GajamG");
// console.count("I am GajamG");


// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();

// const sum =() => console.log(`The sum of 2 & 3 is ; ${2+3}`);
// const multiply =() => 
//     console.log(`The multiplication of 2 & 3 is ; ${2*3}`);

// const measureTime =() =>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// };
// measureTime();


const ProgressBar = require("progress");

const bar = new ProgressBar("Downloading [:bar] :rate/bps :percent :etas" , {
    total:40,
});
const timer = setInterval(()=> {
    bar.tick();
    if(bar.complete) {
        clearInterval(timer);
    }
}, 100);

const chalk= require("chalk");
console.log(chalk.green("This is color for the bar"));