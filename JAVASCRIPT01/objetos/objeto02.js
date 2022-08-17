/*let jogo1 = {
    nome: 'Halo'

}
let jogo2 = {
    nome: 'GoW'
    
}

let videoGame = {
    nome: 'xbox',
    valor: 4300,
    jogos: [jogo1, jogo2,'Forza']
}

let jogo3 ={
    nome: 'FIFA'
}

videoGame.jogos.push(jogo3)

console.log(videoGame)*/

let cliente = {
    nome: 'Ricardo',
    ultimoPedido:{
        produto: 'xbox',
        valor: 4300,
        jogos: [
            {nome:'Halo' },
            {nome: 'GoW'},
            {nome: 'Forza'}

        ]
    }
}
console.log(cliente.ultimoPedido.jogos[0])