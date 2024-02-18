let numeroSecreto;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);
//funcion para el texto de una etiqueta
function asignaTextoElemento(elemento,texto){ //encapsula y se invoca la funcion para los textos en parrafo o titulo
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
//declaracion de funcion
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario))
    //console.log(numeroDeUsuario===numeroSecreto);
    
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignaTextoElemento('p',`Acertaste el numero en  ${intentos} ${(intentos===1)? 'vez':'veces'}`);
        //para habilitar el boton  del nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto) {
            asignaTextoElemento('p','El numero es menor');
        }else{
            asignaTextoElemento('p','El numero es mayor');
        }
        limpiarCaja();
    }
    intentos++;

    return;
}
//funcion para limpiar
function limpiarCaja(params) {
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
    //otra forma de limpiar sin variable
    //document.querySelector('#valorUsuario').value='';
}


//funcion para retornar el numero sereto con return
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length== numeroMaximo){
        asignaTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
        }
    }
}

//funcion mensaje
function condicionesIniciales() {
    asignaTextoElemento('h1','Juego del numero secreto!')
    asignaTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
     //limpiamos la caja
     limpiarCaja();
     //indicar el mensaje de inicio
     //generar el numero secreto
    //inicializar el numero intentos
     condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute("disabled","true");

}

condicionesIniciales();