// Usamos o * para dizer que estamos
// importando TUDO de um arquivo
// o termo "as" permite criar um apelido

import * as petShop from './gato-mod.js'

console.log(petShop.alimentarGato('frajola', 'fruta'))
console.log(petShop.banhoGato('sphinx', 'quente'))
console.log(petShop.tosaGato('vira-lata', 'puppy'))
