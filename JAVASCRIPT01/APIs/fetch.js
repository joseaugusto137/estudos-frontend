document.getElementById('tirar-carta').addEventListener('click', () =>{
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado(){
    let url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    let resposta =  await fetch(url)
    return await resposta.json()
    
}
criarBaralhoEmbaralhado()

async function tirarUmaCarta(deck_id){
    let url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    let resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    let baralho = await criarBaralhoEmbaralhado()
    let carta = await tirarUmaCarta(baralho.deck_id)
    let imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()