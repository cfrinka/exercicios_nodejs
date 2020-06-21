let readlineSync = require('readline-sync');

let nome1 = readlineSync.question('Digite o nome do jogador 1: ');
let txt1 = readlineSync.question('Digite alguma coisa: ');
let nome2 = readlineSync.question('Digite o nome do jogador 2: ');
let txt2 = readlineSync.question('Digite alguma coisa: ');

if (txt1.length > txt2.length) {
    console.log(`O texto digitado por ${nome1} e maior`)
} else if (txt1.length == txt2.length) {
    console.log('Os textos são do mesmo tamanho')
} else console.log(`O texto digitado por ${nome2} e maior`)