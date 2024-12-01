
const {readFileSync, writeFileSync} = require('fs');  
 
/* another way
const fs = require('fs');
console.log(fs.readFileSync); */ 


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first);
console.log(second);

// create a file if is not exist! 

writeFileSync('./content/result',`Here is the result of the first file and the second : \n${first}\n${second} `);



