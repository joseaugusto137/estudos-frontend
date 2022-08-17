//document object model

/*let paragrafo = document.getElementById('para01')

console.log(paragrafo)*/

/*let inputPorClasse = document.getElementsByName('email')

console.log(inputPorClasse[1])

let inputPorClasse = document.querySelectorAll("input[name='email']")

console.log(inputPorClasse)*/

function adicionarComentario(){
   let inputComentario = document.getElementsByName('novo-comentario')

   let textoDigitado = inputComentario[0].value;

   let novosComentarios = document.getElementById('novos-comentarios')

   novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`

   

  // adicionando estilos através do js (rever essa aula)

   novosComentarios.style.color = 'green';
   novosComentarios.style.fontFamily =  'Gill Sans MT';
   novosComentarios.style.fontSize = '20px'
  
   
}
// EVENTOS DE DOM NO JAVA SCRIPT (addEventListener)

document
   .querySelector("select[name='estado']")
   .addEventListener('change', function (event){
    console.log(event.target.value)
    alert(`Você selecionou ${event.target.value}!`)
})


