let readlineSync = require('readline-sync');
let frente = readlineSync.question('Quanto seu terreno tem de frente? Em metros. ');
let fundo = readlineSync.question('Quanto seu terreno tem de fundo? Em metros. ');
let area = Number(frente) * Number(fundo);

console.log(`A área do seu terro é de ${area}m²`)
if (area >= 100) {

    console.log('É um terrenão!')

} else {
    console.log('É... continue juntando dinheiro para comprar um terreno maior!')
}