var tela = document.getElementById('tela');
let operador = document.querySelectorAll('.operador');
let botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
  botao.addEventListener("click", function(){
    let valor = botao.getAttribute('data-valor');
    tela.innerHTML = valor;
  });
});