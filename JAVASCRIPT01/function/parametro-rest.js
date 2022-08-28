/*É um parâmentro interpretado como um array dentro da function;
Ele recebe o restante de todos os parâmetros passados para a function;
O parâmetro rest deve ficar por ultimo da função


function incentivarQuester (mensagem, nomeQuester){
   console.log(`${mensagem} ${nomeQuester}`)
}

incentivarQuester('Parabens por ter chegado ao módulo de JavaScript avançado,', ' João') */

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabens por ter chegado ao módulo avançado de Javascript', 'José', 'Pedro', 'Camila', 'Patricia')