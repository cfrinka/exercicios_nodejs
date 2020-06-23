let readlineSync = require('readline-sync');
let dia = readlineSync.questionInt('Em que dia você nasceu? ');
let mes = readlineSync.questionInt('Em que mês você nasceu? ');

let Aquario = dia >= 20 && mes == 1 || dia <= 18 && mes == 2
let Peixes = dia >= 19 && mes == 2 || dia <= 20 && mes == 3
let Aries = dia >= 21 && mes == 3 || dia <= 19 && mes == 4
let Touro = dia >= 20 && mes == 4 || dia <= 20 && mes == 5
let Gemeos = dia >= 21 && mes == 5 || dia <= 20 && mes == 6
let Cancer = dia >= 21 && mes == 6 || dia <= 22 && mes == 7
let Leao = dia >= 23 && mes == 7 || dia <= 22 && mes == 8
let Virgem = dia >= 23 && mes == 8 || dia <= 22 && mes == 9
let Libra = dia >= 23 && mes == 9 || dia <= 22 && mes == 10
let Escorpiao = dia >= 23 && mes == 10 || dia <= 22 && mes == 11
let Sagitario = dia >= 22 && mes == 11 || dia <= 21 && mes == 12
let Capricornio = dia >= 22 && mes == 12 || dia <= 19 && mes == 1

if (Aries) {
    console.log('Seu signo é Aries')
}
if (Touro) {
    console.log('Seu signo é Touro')
}
if (Gemeos) {
    console.log('Seu signo é Gêmeos')
}
if (Cancer) {
    console.log('Seu signo é Câncer')
}
if (Leao) {
    console.log('Seu signo é Leão')
}
if (Virgem) {
    console.log('Seu signo é Virgem')
}
if (Libra) {
    console.log('Seu signo é Libra')
}
if (Escorpiao) {
    console.log('Seu signo é Escorpião')
}
if (Sagitario) {
    console.log('Seu signo é Sagitário')
}
if (Capricornio) {
    console.log('Seu signo é Capricórnio')
}
if (Aquario) {
    console.log('Seu signo é Aquário')
}
if (Peixes) {
    console.log('Seu signo é Peixes')
}