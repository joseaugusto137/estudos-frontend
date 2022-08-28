let ferverAgua = (chaleiraFogao, fogaoLigado) =>{
    return new Promise((resolve, reject) =>{
        if(chaleiraFogao && fogaoLigado){
            console.log('Passo 1 finalizado: Água foi Fervida')
            resolve()
        } else{
            console.log('É necessário ligar o fogão e colocar a chaleira para ferver a água')
            reject()
        }
    })
}

let passarOcafe = (aguaFervida) => {
    return new Promise ((resolve) =>{
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise ((resolve) =>{
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) =>{
    return new Promise ((resolve) =>{
        console.log('Passo 4 finalizado: Lavei a xícara.')
        resolve(true)
    })
}

let chaleiraFogao = true
let fogaoLigado = true

async function iniciarProcessoDeCafe (){
    let aguaFervida = await ferverAgua (chaleiraFogao, fogaoLigado)
    let cafePassado  = await passarOcafe(aguaFervida)
    let cafeTomado = await tomarCafe (cafePassado)
    let xicaraLavada = await lavarXicara (cafeTomado)
    if(lavarXicara) console.log('Finalizador o ritual de tomar o café, bora trabralhar!!! ')
}

iniciarProcessoDeCafe()
