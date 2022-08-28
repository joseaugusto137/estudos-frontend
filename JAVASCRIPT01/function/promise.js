/*
promise = sincronicidade

POSSUI 4 ESTADOS:
    PENDENTE = a promise foi criada, mas não foi executada;
    REALIZADA (resolve)= quando ela obteve sucesso na execução;
    RECUSADA(reject) = quando houve alguma falha em sua execução;
    ESTABELECIDA = quando ela foi realizada ou recusada */

//new Promise((resolve, reject) =>{


//})



let ferverAgua = function(chaleiraFogao, fogaoLigado){
    return new Promise((resolve, reject) =>{
        if(chaleiraFogao && fogaoLigado){
            console.log('Começando o processo de ferver a água')
            resolve()
        } else{
            console.log('É necessário ligar o fogão e colocar a chaleira para ferver a água')
            reject()
        }
    })
}

let chaleiraFogao = true
let fogaoLigado = true
ferverAgua(chaleiraFogao, fogaoLigado)
console.log('fazendo o café')