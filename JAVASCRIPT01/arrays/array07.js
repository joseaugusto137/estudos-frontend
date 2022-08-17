//array.slice(inicio,fim)

let frutas = ['banana', 'maçã', 'laranja', 'uva']

/*let frutasExtraidas = frutas.slice(1,5)

console.log(frutasExtraidas)*/

/*let frutasExtraidas = frutas.splice(1,2)

console.log(frutasExtraidas)
console.log(frutas)*/

let frutasRemoverEAdicionar = frutas.splice(1,3, 'goiaba', 'abacaxi', 'pêra')

console.log(frutas)