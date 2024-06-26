const path = require("path");
const filePath = "/Users/gouthamkumar/Desktop/Nodejs/errors_nodejs/sample_files/sample.txt";
const fs = require("fs");
const fsPromise = require("fs").promises;
//dir name
// console.log(path.dirname(filePath));
// console.log(__dirname);

// //base name
// console.log(path.basename(filePath));
// console.log(__filename);

// //extension name
// console.log(path.extname(filePath));


// const sampleFile = "sample.txt";
// console.log(path.join(path.dirname(filePath)),sampleFile );

// const fs = require("fs");
// console.log(fs);

//Reading from a file -asynchronus
// fs.readFile(filePath,"utf-8", (err, data)=>{
//     if (err) throw new Error("Something went Wrong");
//     console.log(data);
// });

// try{
//     const data = fs.readFileSync(path.join(__dirname,"sample_files", "sample.txt"));
//     console.log(data);
// } catch(err){
//     console.log(err);
// }

// as of now text.txt file is empty
// writing , adding text to it
const txtFile = path.join(__dirname, "sample_files", "text.txt");
const content = "I love nodeJS Tutorial";
// fs.writeFile(txtFile, content, (err) =>{
//     if(err) throw new Error("Something went Wrongg");
//     console.log("writing operation Completed Succcessfully");
//     fs.readFile(txtFile,"utf-8",(err, data) => {
//         if(err) throw new Error(err);
//         console.log(data);
//     });
// });


//by fs promise same thing writing 

const writingInFile = async()=>{
    try{
        await fsPromise.writeFile(txtFile, "\n Given new name for file",{
            flag: "a+"
        });
        // await fsPromise.appendFile(txtFile, "\n This is file appender");
        await fs.promises.rename(txtFile, path.join(__dirname, "sample_files", "newfilename.txt"));
        const data = await fsPromise.readFile(path.join(__dirname, "sample_files", "newfilename.txt"));
        console.log(data.toString());
    } catch(err){
        console.log(err);
    }
};
writingInFile();


