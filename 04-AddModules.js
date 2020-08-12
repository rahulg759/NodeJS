const fs = require("fs");
const { timeStamp } = require("console");

//Make sure text define as let not const because we need to change later the content
let text = fs.readFileSync("\NodeJS\\simple.txt", "utf-8");
console.log("The content of files is :");
console.log(text);

// Replace the content of file
text = text.replace("hi", "Hello");
console.log("Print the content after replace : " + text);
console.log(text);

// Creating new file along with timeStamp.txt along with replaced content
console.log("The new file along with content : ")
fs.writeFileSync("\NodeJS\\text.txt",text);
