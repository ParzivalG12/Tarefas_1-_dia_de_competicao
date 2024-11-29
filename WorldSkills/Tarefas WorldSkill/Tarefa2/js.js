
var time = new Number();
var time = 61;
var vidas = 3


function contator(){

  if ((time - 1) >= 0){
    time -= 1;
    if (time == 0) {
      location.href = "victory.html";
    }else if(time < 10){
      time = "0"+time;
    }else if (time <= 59) {
      var img = document.querySelector("#vida-1");
      img.setAttribute('src', './imagens/coracao_vazio.png');
    } if (time <= 58) {
      var img = document.querySelector("#vida-2");
      img.setAttribute('src', './imagens/coracao_vazio.png')
    } if (time <= 57) {
      var img = document.querySelector("#vida-3");
      img.setAttribute('src', './imagens/coracao_vazio.png')
    }
    tempo.innerText=time;
    setTimeout('contator()', 1000);

  }
}


function posicao_mosquito() {

  var posicaoX = Math.floor(Math.random() * 800);
  var posicaoy = Math.floor(Math.random() * 1000);
  document.getElementById("mosquito").style.marginTop = posicaoX + "px";
  document.getElementById("mosquito").style.marginLeft = posicaoy + "px";
  
}


