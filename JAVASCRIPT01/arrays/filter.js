let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'José', idade: 32},
    {nome: 'Carlos', idade: 29}
]

/*let pessoasComIdadeAcimaDe32Anos = []
for (let i = 0; i <pessoas.length; i++){
    if(pessoas[i].idade >= 32){
        pessoasComIdadeAcimaDe32Anos.push(pessoas[i])
    }
}

console.log(pessoasComIdadeAcimaDe32Anos)*/

/*let pessoasComIdadeAcimaDe32Anos = pessoas.filter(function(pessoa){
    return pessoa.idade >= 32
})

console.log(pessoasComIdadeAcimaDe32Anos)*/

let pessoasComIdadeAcimaDe32Anos = pessoas.filter((pessoa) => pessoa.idade >= 32)

console.log(pessoasComIdadeAcimaDe32Anos)