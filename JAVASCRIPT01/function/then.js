
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

ferverAgua(chaleiraFogao, fogaoLigado)
.then(() =>{
    return passarOcafe();
})
.then(()=>{
    return tomarCafe();
})
.then(()=>{
    return lavarXicara();
})
.then(()=>{
    console.log('Finalizado o ritual do café, bora trabalhar!!')
})

