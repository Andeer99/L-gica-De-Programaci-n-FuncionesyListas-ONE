let numeroSecreto = generarNumeroSecreto();
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

asignarTextoElemento('h1', "Juego del numero secreto");
asignarTextoElemento('p', 'Dame un numero del 1 al 10');
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número tras ${intentos} ${intentos == 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', 'Dame un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()* 10)+1;
    //Si ya se sortearon todos los numeros..
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

    //Si el numero generado está incluido en la lista..
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    //Se necesita reiniciar la caja
    limpiarCaja();
    //Indicar nuevamente mensaje de intervalo de numeros
    //Inicializar el número de intentos
    //Generar nuevamente el número aleatorio
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

