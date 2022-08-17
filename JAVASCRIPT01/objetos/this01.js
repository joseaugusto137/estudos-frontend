/* this funciona com escopos, que são globais ou locais.*/
//'use strict' usado para resolver problemas de escopos



/*this.nome = 'jose'
function saudar() {
    console.log('this no contexto de funcao', this)
    console.log(`Olá, ${this.nome}`)
}
saudar()*/

/*let usuario = {
    nome: 'Roberto',
    saudar: function() {
        console.log('this no contexto do médoto', this)
        console.log('this.name no contexto do metodo', this.nome)
    }
}
usuario.saudar()*/

let comida = {
    nome: 'brocolis',
    temperatura: 0,
    
}

/*comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento){
    comidaParaCozinhar.temperatura = temperaturaDeCozimento
}


comida.cozinhar(comida, 100)

console.log(comida)*/

//ou

comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento
}
comida.cozinhar(130)

console.log(comida)