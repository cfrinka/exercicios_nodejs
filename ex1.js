let readlineSync = require('readline-sync');

let voo = readlineSync.question('Qual o número do seu voo?  ');
let fileira = readlineSync.question('Qual fileira prefere? A,B,C,D ou F?  ');

console.log(`O numero do seu voo é ${voo} e a sua fileira é a ${fileira}`);