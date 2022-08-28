/*
Sincrono: Segue um fluxo linear de execução;
Assíncrono: Nã existe essa dependência. Não espera a execução da linha anterior para executar o código seguinte
*/ 

function colocarAguaFerver(){
    console.log('Colocar a agua para ferver')

    setTimeout(() => {
        console.log('Água ferveu')
        passarCafe()
    }, 5000);
}

function passosParaPassarCafe(){
    console.log('pegar o pó do café')
    console.log('pegar o filtro do café')
    console.log('colocar o o pó do café no filtro')
    console.log('colocar o filtro no copo')
    
    
}

function passarCafe(){
    console.log('passando o café')
}

colocarAguaFerver()
passosParaPassarCafe()
