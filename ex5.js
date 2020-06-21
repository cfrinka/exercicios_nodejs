let readlineSync = require('readline-sync');

let texto = readlineSync.question('digite seu texto: ');

console.log(`Voce digitou ${texto.length} caracteres`)