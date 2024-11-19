const key = "3f289acda1734f28b27a22f1d301b3c0"
function colocarDadosNaTela(dados){

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "Cº"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}



async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json ())

    colocarDadosNaTela(dados)

    

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

const imagensFundo = [
    'NubladoCHOVENDO.gif',
    'chuva.gif',
    'ceulimpo.gif',
    'raio.gif',
    'sol.gif',
    'solnuvem.jpg'
  ];
  

  function mudarImagemFundo() {

    const imagemAleatoria = imagensFundo[Math.floor(Math.random() * imagensFundo.length)];
    

    document.body.style.backgroundImage = `url('${imagemAleatoria}')`;
  }

  setInterval(mudarImagemFundo, 5000);
  

  mudarImagemFundo();



