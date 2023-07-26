const key = "a37b176a749f2dd88fbd69d6940cc0d4"

function botaoClick() {
  let cidade = document.querySelector(".input-cidade").value
  buscarCidade(cidade)
}

async function buscarCidade(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  telaInformacoes(dados)
}

function telaInformacoes (dados){
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) +" ºC"
  document.querySelector(".tempo").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + " %"
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  console.log(dados)
}