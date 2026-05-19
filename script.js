let quantidadeCarrinho = 0;  //let == var

const contadorCarrinho = document.getElementById("contador-carrinho");
const botoesComprar = document.querySelectorAll(".botao-comprar");
const mensagemCarrinho = document.getElementById("mensagem-carrinho")
const campoIA = document.getElementById("campo-ia")
const botaoIA = document.getElementById("botao-ia")
const resultadoIA = document.getElementById("resultado-ia")

botoesComprar.forEach(function (botao) {
  botao.addEventListener("click", function () {
    quantidadeCarrinho++;
    contadorCarrinho.textContent = quantidadeCarrinho;

    const card = botao.closest(".card")
    const nomeProduto = card.querySelector(".card-title").textContent
    mensagemCarrinho.textContent = nomeProduto + " foi adicionado ao carrinho!"
    mensagemCarrinho.classList.remove("d-none")
    setTimeout(() => {
        mensagemCarrinho.classList.add("d-none")
    }, 2000);
  });
});

// Função para simular a resposta da IA
botaoIA.addEventListener("click",function(){
  const texto = campoIA.value.toLocaleLowerCase().trim()
  let resposta = ""

  if(texto.includes("game") || texto.includes("jogo") || texto.includes("gamer")){
    resposta = "Recomendamos o notebook Gamer XYZ, com processador Intel i7 e placa de vídeo NVIDIA RTX 3060."
  }else if(texto.includes("trabalha")||texto.includes("trabalho")||texto.includes("business")){
    resposta = "Recomendamos o notebook Business ABC, com processador Intel i5 e bateria de longa duração."
  }else if(texto.includes("estuda")||texto.includes("estudante")||texto.includes("estudar")){
    resposta = "Recomendamos o notebook Estudante DEF, com processador Intel i3 e preço acessível."
  }else if(texto == ""){
    resposta = "Por favor, digite uma descrição do produto que você está procurando."
  }else{
    resposta = "Desculpe, não encontrei o produto que você procura."
  }

  resultadoIA.textContent = resposta
  resultadoIA.classList.remove("d-none")
})
