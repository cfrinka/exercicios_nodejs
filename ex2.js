let readlineSync = require('readline-sync');
let mask = readlineSync.question('Está usando máscara quando sai de casa? ');
let lavarMao = readlineSync.question('Está lavando as mãos com frequência? ');

let resultado = mask === "sim" && lavarMao === "sim" ? 'Parabéns, voce é uma pessoa legal' : 'Precisa mehorar isso aí hein amiguinho, o Coronga não é uma invenção comunista';
console.log(resultado);

// if (mask == 'sim' && lavarMao == 'sim') {

//console.log('Parábens, você é uma pessoa legal!')
//} else console.log('Precisa melhorar isso aí hein amiguinho, o Coronga não é uma invenção comunista')