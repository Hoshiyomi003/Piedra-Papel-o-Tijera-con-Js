"use strict";
//Vamos a capturar todos los elementos del dom para las opciones de: Piedra, papel o tijera//
let botonPiedra = document.querySelector('.piedra');
let botonPapel = document.querySelector('.papel');
let botonTijera = document.querySelector('.tijera')

//Capturamos los elementos del dom//

let manoUsuario = document.querySelector('.mano-usuario')
let manoComputador = document.querySelector('.mano-computador')

let puntajeUsuario = document.querySelector('.puntajes-usuario p')
let puntajeComputadora = document.querySelector('.puntajes-computador p')

let labelresultado = document.querySelector('.Resultado')

let tablero = document.querySelector('.tablero')

let contUsuario = 0;
let contCompu = 0;

let eleccionUsuario = "";
let eleccionComputador ="";

/***
 * Alerta
 */

const swalInicio = () => {
    Swal.fire({
      title: 'Bienvenido a Piedra, Papel o Tijera',
      text: 'Juega con la Computadora, quien llegue a ser el primero de tres, gana, si gana el usuario, las I.A no dominaran el mundo, pero si gana la computadora, nos dominaran.',
      imageUrl:'https://www.1999.co.jp/itbig15/10156081a.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
      confirmButtonText:'Acepto',
     })
      
}
swalInicio();
const swalGanador = () =>{
  Swal.fire({
      title: 'Ganaste',
      text: 'Lograste evitar que Skynet se apodere del mundo',
      imageUrl: 'https://img1.ak.crunchyroll.com/i/spire3/ce09954d04b9388547d819522f75a01b1663350777_full.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText:'Hell yeah, baby!',
    })
    
}


const limpiarMarcadores = () => {
  contUsuario = 0;
  contCompu = 0;
  puntajeUsuario.textContent = contUsuario;
  puntajeComputadora.textContent = contCompu;
}
const ganadores = (puntajeUsuario, puntajeComputadora) => {
  console.log("Usuario: " +puntajeUsuario , "Maquina" +puntajeComputadora ,"áca se muestra el resultado")
  if(puntajeUsuario >= 3 && puntajeUsuario > puntajeComputadora){
    console.log("Usuario Ganador");
    swalGanador();
    setTimeout(limpiarMarcadores, 3000)
  }else if (puntajeComputadora >=3 && puntajeUsuario <puntajeComputadora){
    console.log("Gana computadora")
    swalPerdedor();
    setTimeout(limpiarMarcadores, 3000)

  }
}
const swalPerdedor = () =>{
    Swal.fire({
        title: 'Perdiste',
        text: 'Ahora las máquinas tomarán control del mundo',
        imageUrl: 'https://i.pinimg.com/originals/cf/72/76/cf72766c7a5c883c121edcdfe1199249.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText:'Nooooo!',
      })
      
}

const eleccionComputadora = () => {
  let opcionAlAzar = Math.floor(Math.random() * 3); //Indica las opciones que puede elegir la computadora, "floor" es para identificar cuál opción//
  if (opcionAlAzar == 0) {
    manoComputador.src = "./assets/piedra_computadora.png";
    eleccionComputador = "piedra";
  }else if (opcionAlAzar == 1) {
    manoComputador.src = "./assets/papel_computadora.png";
    eleccionComputador = "papel";
  }else {
   manoComputador.src = "./assets/tijera_computadora.png";
   eleccionComputador = "tijera";
  }

};

const Resultado = () => {
  if (eleccionUsuario == "piedra") {
    if (eleccionComputador == "piedra") {
      labelresultado.textContent = "Coincidiste con la máquina, vaya.";
    }
    if (eleccionComputador == "papel") {
      labelresultado.textContent = "Skill issue, vete al Minecraft.";
      contCompu++;
      puntajeComputadora.textContent = contCompu;
      ganadores(contUsuario, contCompu);
    }
    if (eleccionComputador == "tijera") {
      labelresultado.textContent = "Sin duda, no fue skill issue, ganaste.";
      contUsuario++;
      puntajeUsuario.textContent = contUsuario;
      ganadores(contUsuario, contCompu);
    }
  }

  if (eleccionUsuario == "papel") {
    if (eleccionComputador == "piedra") {
      labelresultado.textContent = "Sin duda, no fue skill issue, ganaste.";
      contUsuario++;
      puntajeUsuario.textContent = contUsuario;
      ganadores(contUsuario, contCompu);
    }
    if (eleccionComputador == "papel") {
      labelresultado.textContent = "Coincidiste con la máquina, vaya.";
    }
    if (eleccionComputador == "tijera") {
      labelresultado.textContent = "Skill issue, vete al Minecraft.";
      contCompu++;
      puntajeComputadora.textContent = contCompu;
      ganadores(contUsuario, contCompu);
    }
  }

  if (eleccionUsuario == "tijera") {
    if (eleccionComputador == "piedra") {
      labelresultado.textContent = "Skill issue, vete al Minecraft.";
      contCompu++;
      puntajeComputadora.textContent = contCompu;
      ganadores(contUsuario, contCompu);
    }
    if (eleccionComputador == "papel") {
      labelresultado.textContent = "Sin duda, no fue skill issue, ganaste.";
      contUsuario++;
      puntajeUsuario.textContent = contUsuario;
      ganadores(contUsuario, contCompu);
    }
    if (eleccionComputador == "tijera") {
      labelresultado.textContent = "Coincidiste con la máquina, vaya.";
    }
  }
};

botonPiedra.onclick = () => {
  manoUsuario.src = "./assets/piedra_ada.png"
  manoComputador.src = "./assets/piedra_computadora.png"
  labelresultado.textContent ="...";
  tablero.classList.add("jugando");
  setTimeout (() =>{
    eleccionUsuario = "piedra"
    manoUsuario.src = "./assets/piedra_ada.png"
    eleccionComputadora();
    Resultado();
    tablero.classList.remove("jugando")
  },2000)
}

botonPapel.onclick = () => {
  manoUsuario.src = "./assets/papel_ada.png"
  manoComputador.src = "./assets/papel_computadora.png"
  labelresultado.textContent ="...";
  tablero.classList.add("jugando");
  setTimeout (() =>{
    eleccionUsuario = "papel"
    manoUsuario.src = "./assets/papel_ada.png"
    eleccionComputadora();
    Resultado();
    tablero.classList.remove("jugando")
  },2000)
}

botonTijera.onclick = () => {
  manoUsuario.src = "./assets/tijera_ada.png"
  manoComputador.src = "./assets/tijera_computadora.png"
  labelresultado.textContent ="...";
  tablero.classList.add("jugando");
  setTimeout (() =>{
    eleccionUsuario = "tijera"
    manoUsuario.src = "./assets/tijera_ada.png"
    eleccionComputadora();
    Resultado();
    tablero.classList.remove("jugando")
  },2000)
}










