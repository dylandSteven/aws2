var barra = document.querySelector(".navbar");
var letras = document.querySelectorAll("arriba");
var change = document.getElementById("change");
var sub = document.getElementById("subtitulo");


//change.style.backgroundColor = "black";

//change.style.=;

$(window).scroll(function (e) {
  var scroll = $(window).scrollTop();
  var responsive = $(window).innerWidth();
 
 
 
  if (scroll >= 0 && scroll<30 && responsive>500)
  {
    barra.style.backgroundColor="none"
    document.querySelector(".navbar").style.opacity = "1";
  }

  if(scroll>30&&scroll<720&& responsive>500){
    document.querySelector(".navbar").style.opacity = "0";
    barra.style.backgroundColor=""
  }

  if ( scroll > 720 &&responsive>500) {
    document.querySelector(".navbar").style.opacity = "1";
    barra.style.backgroundColor="black"
  }

});
