const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

const textOut = `This avocado: ${textIn}. \n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut, 'utf-8');
console.log('File written successfully!', textOut);