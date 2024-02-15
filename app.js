let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('cajaTexto').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} !!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El número secreto es menor');
            }else{
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#cajaTexto').value = '';  
     
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){

    }else{

        //Si el número generado está incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${nummeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mesaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/
