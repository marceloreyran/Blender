let offLicuadora = "apagada";
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound")
let licuadora = document.getElementById("blender");

function controlLicuadora() {
  if (offLicuadora == "apagada") {
    offLicuadora = "encencida";
    makeBrr();
    licuadora.classList.add("active");
    console.log("se encendio");
  } else {
    offLicuadora = "apagada";
    makeBrr();
    licuadora.classList.remove("active");
    console.log("se apago");
  }
}

function makeBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0 ;
    }

}
