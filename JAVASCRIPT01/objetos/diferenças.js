/*
array > usado para a criação de listas de numeros, strings ou objetos
let frutas = ['x', 'y', 'z']

objetos > Usado para agrupar informações e caracteristicas para aproximar o código ao mundo real, de modo a garantir melhor manuteção.
let fruta1 = {
    nome: 'x'
    valor: '0.50'
}
let fruta2 = {
    nome: 'x'
    valor: '1.50'
}

colocar objetos em arrays

let frutas = [fruta1,fruta2]
console.log(frutas)

*/

let fruta1 = {
    nome: 'banana',
    valor: '0.50'
}
let fruta2 = {
    nome: 'pêra',
    valor: 1.50
}

let frutas = [fruta1,fruta2]
console.log(frutas[1].nome)
