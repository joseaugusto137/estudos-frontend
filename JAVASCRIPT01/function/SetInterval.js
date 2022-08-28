// executado a cada x milissegundos

/*setInterval(() => {
    alert('Olá, mundo! executado a cada 4 segundos')
}, 4000);*/

//parar a execução:

let idDoIntervalo = setInterval(() => {
    alert('Olá, mundo! executado a cada 4 segundos')
}, 4000);

clearInterval(idDoIntervalo) //funciona com o set time out, através do clearTimeOut


