// console.log("Hello world");
const fs = require("fs");
const obj = {
    a: 10,
    b: 25
}
// JSON.stringify : chuyen 1 obj hay arr ve JSON
const objToJson = JSON.stringify(obj);
// console.log("Begin");

// fs.writeFile("test.txt", objToJson, function(error){
//     if(error){
//         console.log("Error !!!", error);
//     } else {
//         console.log("Write file success!");
//     }
// });
// fs.readFile("test.txt", function(err, data){
//     if(err){
//         console.log("Error !!!", err);
//     } else {
//         const jsonToObj = JSON.parse(data)
//         console.log("File Data: " , jsonToObj.a);
//     }
// });
// console.log("End");

// console.log("Begin Sync.");

// fs.writeFileSync("testSync.txt", objToJson)
// const data = fs.readFileSync("testSync.txt", { encoding: "utf8" });
// console.log(data);
// fs.readFileSync("testSync.txt");
// console.log("End Sync");
const fileCtrl = require("./fileControl");
// const readFileCustom = fileCtrl.readFileCustom;
const {readFileCustom, writeFileCustoms} = fileCtrl;
console.log(fileCtrl.readFileCustom("test.txt"));

