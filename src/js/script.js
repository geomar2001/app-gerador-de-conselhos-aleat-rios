const meuBotao = document.getElementById('meu botao');
const paragrafo = document.querySelector('.conselho p');
const titulo = document.querySelector('.conselho h1');
let i = 0;

meuBotao.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      const conselho = data.slip.advice;
      paragrafo.textContent = conselho;
    })
    .catch(error => console.error("Erro ao buscar conselho:", error));
  paragrafo.textContent = "Carregando...";
});

meuBotao.addEventListener("click", function () {
  i = i + 1;
  titulo.textContent = `CONCELHO #${i}`;


})