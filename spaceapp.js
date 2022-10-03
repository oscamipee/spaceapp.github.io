let respuestaJugador



function seleccionarQueQuiereAprender(){
    let inputHistoria = document.getElementById('historia')
    let inputConstruccion = document.getElementById('construccionYFuncionamiento')
    let inputImagenes = document.getElementById('informacionEYmagenes')
    let spanTemaSeleccionado = document.getElementById('TemaSeleccionado')
    
    if (inputHistoria.checked){
        spanTemaSeleccionado.innerHTML='HISTORIA'
    }else if (inputConstruccion.checked){
        spanTemaSeleccionado.innerHTML='CONSTRUCCION Y FUNCIONAMIENTO DEL JAMES WEBB'
    }else if (inputImagenes.checked){
                spanTemaSeleccionado.innerHTML='INFORMACION E IMAGENES DEL JAMES WEBB'
    }
    
}

function iniciarPagina(){
    let botonQueQuieresAprender = document.getElementById("boton-que-quieres-aprender")
    botonQueQuieresAprender.addEventListener("click", seleccionarQueQuiereAprender)

   
    //let sectionSeleccionarSubtemaConstruccion= document.getElementById('seleccionar-sub-tema-construccion')
    //sectionSeleccionarSubtemaConstruccion.style.display='none'

    //let sectionSeleccionarSubtemaImagenes = document.getElementById('seleccionar-sub-tema-imagenes')
    //sectionSeleccionarSubtemaImagenes.style.display='none'

    //FUNCIONES DE LOS BOTONES HISTORIA
    historia1()
    historia2()
    historia3()
    //---------------
    //FUNCIONES DE LOS BOTONES CONSTRUCCION
    construccion1()
    construccion2()
    construccion3()
    //---------------
    //FUNCIONES DE LOS BOTONES FUNCIONAMIENTO
    Imagenes1()
    Imagenes2()
    Imagenes3()
    //-------------------

    //jJUEGOS
    JuegoHistoria1()
    JuegoInformacion1()
    //let botonVerdaderoHistoria = document.getElementById('boton-verdadero-historia')
    //botonVerdaderoHistoria.addEventListener('click',verdadero1)
    //let botonFalsoHistoria  = document.getElementById('boton-falso-historia')
    //botonFalsoHistoria.addEventListener('click',falso1)
    //------------------

    
}


// --- MOSTRAR HISTORIA DE LOS TELESCOPIOS
function crearMensajeHistoria1(){
    let sectionMensajes = document.getElementById('mensajesdeHistoria')
    let parrafo1 = document.createElement('p')  //Crear un elemento en HTML
    parrafo1.innerHTML = 'HISTORIA 1//  El proyecto del telescopio espacial James Webb fue planteado por primera vez en 1996 como un ambicioso telescopio de próxima generación, con un camino muy largo y difícil que recorrer. El observatorio estará mucho más allá de la órbita de la Luna, por lo que una vez que esté allí, estará solo, por lo que todo tiene que estar funcionando adecuadamente desde el principio.'
    sectionMensajes.appendChild(parrafo1)

}
function historia1(){
    let botonHistoria1 = document.getElementById("historia-1")
    botonHistoria1.addEventListener("click",crearMensajeHistoria1 )
}

function crearMensajeHistoria2(){
    let sectionMensajes = document.getElementById('mensajesdeHistoria')
    let parrafo2 = document.createElement('p')  //Crear un elemento en HTML
    parrafo2.innerHTML = 'HISTORIA 2// Los 18 espejos mas pequeños del james webb poseen una forma hexagonal y una de las cosas mas llamativas es de estos, es su brillante color dorado, el cual es debido a que están cubiertos de una capa de oro, ya que este es un material increíblemente reflectante. Porque hexagonales Son de esta forma ya que así se reducen los espacios entre las piezas,, de este modo se puede maximizar la prestaciones ópticas del telescopio. Ruido Escudo térmico'
    sectionMensajes.appendChild(parrafo2)
}

function historia2(){
    let botonHistoria2 = document.getElementById("historia-2")
    botonHistoria2.addEventListener("click",crearMensajeHistoria2 )
}

function crearMensajeHistoria3(){
    let sectionMensajes = document.getElementById('mensajesdeHistoria')
    let parrafo3 = document.createElement('p')  //Crear un elemento en HTML
    parrafo3.innerHTML = 'HISTORIA 3// El telescopio james webb al estar en el espacio se ve en constante exposición a diferentes tipos radiación como la temperatura, la cual  afecta el correcto funcionamiento del telescopio, ya que este no podrá captar señales débiles, debido a esto el james webb  posee un escudo térmico el cual es una especie de parasol gigante que lo protege de la fuentes de calor . Qué tipo de radiación capta el james webb. A diferencia de otros telescopios como el Hubble, que capta especialmente luz visible y ultravioleta el James webb capta luz infrarroja, la cual es un espectro de baja frecuencia que nos podría dar ideas de como son los confines del universo.'
    sectionMensajes.appendChild(parrafo3)
}

function historia3(){
    let botonHistoria3 = document.getElementById("historia-3")
    botonHistoria3.addEventListener("click",crearMensajeHistoria3 )
}
// -------------------------------------------------

//-- MOSTRAR CONSTRUCCION Y FUNCIONAMIENTO DEL JAMES WEBB
function crearMensajeInformacion1(){
    let sectionMensajes = document.getElementById('mensajesdeConstruccion')
    let parrafoC1 = document.createElement('p')  //Crear un elemento en HTML
    parrafoC1.innerHTML = 'INFORMACION 1'
    sectionMensajes.appendChild(parrafoC1)

}
function construccion1(){
    let botonInformacion1 = document.getElementById("informacion-1")
    botonInformacion1.addEventListener("click",crearMensajeInformacion1 )
}

function crearMensajeInformacion2(){
    let sectionMensajes = document.getElementById('mensajesdeConstruccion')
    let parrafoC2 = document.createElement('p')  //Crear un elemento en HTML
    parrafoC2.innerHTML = 'INFORMACION 2'
    sectionMensajes.appendChild(parrafoC2)
}

function construccion2(){
    let botonInformacion2 = document.getElementById("informacion-2")
    botonInformacion2.addEventListener("click",crearMensajeInformacion2 )
}

function crearMensajeInformacion3(){
    let sectionMensajes = document.getElementById('mensajesdeConstruccion')
    let parrafoC3 = document.createElement('p')  //Crear un elemento en HTML
    parrafoC3.innerHTML = 'INFORMACION 3'
    sectionMensajes.appendChild(parrafoC3)
}

function construccion3(){
    let botonConstruccion3 = document.getElementById("informacion-3")
    botonConstruccion3.addEventListener("click",crearMensajeInformacion3 )
}
// ------------------------------------------------

// --MOSTRAR FUNCIONAMIENTO DEL JAMES WEBB
function crearMensajeFuncionamiento1(){
    let sectionMensajes = document.getElementById('mensajesdeInformacion')
    let parrafoI1 = document.createElement('p')  //Crear un elemento en HTML
    parrafoI1.innerHTML = 'FUNCIONAMIENTO 1'
    sectionMensajes.appendChild(parrafoI1)
}

function Imagenes1(){
    let botonFuncionamiento1 = document.getElementById("imagenes-1")
    botonFuncionamiento1.addEventListener("click",crearMensajeFuncionamiento1 )
}

function crearMensajeFuncionamiento2(){
    let sectionMensajes = document.getElementById('mensajesdeInformacion')
    let parrafoI2 = document.createElement('p')  //Crear un elemento en HTML
    parrafoI2.innerHTML = 'FUNCIONAMIENTO 2'
    sectionMensajes.appendChild(parrafoI2)

}

function Imagenes2(){
    let botonFuncionamiento2 = document.getElementById("imagenes-2")
    botonFuncionamiento2.addEventListener("click",crearMensajeFuncionamiento2 )
}

function crearMensajeFuncionamiento3(){
    let sectionMensajes = document.getElementById('mensajesdeInformacion')
    let parrafoI3 = document.createElement('p')  //Crear un elemento en HTML
    parrafoI3.innerHTML = 'FUNCIONAMIENTO 3'
    sectionMensajes.appendChild(parrafoI3)
}
function Imagenes3(){
    let botonFuncionamiento3 = document.getElementById("imagenes-3")
    botonFuncionamiento3.addEventListener("click",crearMensajeFuncionamiento3 )
}
//------------------------------------------------
//JUEGOS------------------------------------

function juegoPiedraPapelTijeraHistoria () {
    let resultadoH
function aleatorio (min,max){
    return Math.floor(Math.random() * (max -min +1 ) + min)
    }


function eleccion (jugada){
    let resultado= ""
    if (jugada==1){
        resultado= "Piedra"
    } else if (jugada==2){
        resultado= "Papel"
    }else if (jugada==3){
        resultado= "Tijera"
    }else{
        resultado= "MAL ELEGIDO"
    }
    return resultado
}

function preguntas(){
    pc= aleatorio(1,3)
    if (pc==1){
        alert("¿Cual es el telescopio mas potente del mundo?")
    } else if (pc==2){
        alert("¿EN QUE AÑO FUE POR PRIMERA VEZ PLANEADO EL TELESCOPIO JAMES WEBB?")
    } else if(pc==3){
        alert("Pregunta 3")
    }

}

function respuestaJugador(){
    usuario= prompt("1. 1996     2. 2018        3.2005")
}

function eleccionPregunta (respuestaH){
        resultadoH= ""
    if (respuestaH==1){
        resultadoH= "correcto"
    } else if (respuestaH==2){
        resultadoH= "incorrecto"
    }else if (respuestaH==3){
        resultadoH= "incorrecto"
    }else{
        resultadoH= "MAL ELEGIDO"
    }
    return resultadoH
}

let pc= 0
let triunfos= 0
let perdidas =0

while (triunfos < 3 && perdidas <3){
           
            pc= aleatorio(1,3)
            usuario= prompt ("Que opcion escoges? 1. Piedra 2.Papel 3.Tijera")

            alert("Usuario elige "+ eleccion(usuario))//SE MUESTRA LA OPCION QUE ELIGE EL USUARIO
            alert ("El pc elige "+ eleccion(pc)) //SE MUESTRA LA OPCION QUE ELIGE EL PC

        //******** LOGICA DEL COMBATE, Y SE MUESTRA SI GANO O PERDIO**************

        if (pc==usuario){
            alert("EMPATE")
        } else if ((usuario==1 && pc==3) ||(usuario==2 && pc==1) || (usuario==3 && pc==2)){
            alert("GANASTE!! ")
        triunfos= triunfos+1
        }
        else {
            preguntas()
            usuarioH= prompt("1. 1996     2. 2006   3.2017")
                alert(eleccionPregunta(usuarioH))
                    
        //else {
                        //alert("MAL ELEGIDO")
        
        perdidas= perdidas + 1
        }
            
        alert("GANASTE "+ triunfos + " veces y "+" perdiste "+ perdidas + " veces ")
} 


}

function JuegoHistoria1(){
    let botonJuegoHistoria1 = document.getElementById("boton-juego-historia")
    botonJuegoHistoria1.addEventListener("click",juegoPiedraPapelTijeraHistoria)
}

function JuegoInformacion1(){
    let botonJuegoInformacion1 = document.getElementById("boton-juego-construccion")
    botonJuegoInformacion1.addEventListener("click",juegoPiedraPapelTijeraHistoria)
}

function JuegoFuncionamiento1(){
    let botonJuegoFuncionamiento1 = document.getElementById("boton-juego-imagenes")
    botonJuegoFuncionamiento1.addEventListener("click",juegoPiedraPapelTijeraHistoria)
}

window.addEventListener('load',iniciarPagina)  //un evento pero no a un boton si no a window (EST ES LA QUE HACE QUE EL JUEGO SE INICIE SOLO CUANDO YA SE CARGO TODO EL HTML)
