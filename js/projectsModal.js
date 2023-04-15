console.log("projectModal js activado");

//contenedor padre del modal
const modalFather = document.querySelector(".modalProjects");
//contenedor de contenido del modal
const modalContentFather = document.querySelector(".modalContainer");

//elementos dentro de modal
var modalContentTotal = document.querySelector(".modalContentContainer").children.length;

//Con estas instruccion permitimos cerrar el modal desde arrea exterior si que se cierre al clica la ventana de contenido
//detecta si el contenido ha sido tocado
var detectContentModal = false;

//aqui detectamos el clic al contenido
modalContentFather.onclick = () => {
    detectContentModal = true;
}

console.log(modalContentFather.children[0].children.length);

//si clicamos el contenedor padre
modalFather.onclick = () => {
    //si el contenedor de contenido no ha sido clicado haz que desaparesca

    if (detectContentModal == false) {
        //borrar contenido del modal

        document.querySelector(".modalContainer").removeChild(document.querySelector(".modalContainer").lastChild);



        modalFather.style.display = "none";

    }
    //y antes de acabar poneme el detector de modal a falso
    detectContentModal = false;


}
//final del controlador de click

//creador de modal
//pundo de partida
let modalContent = document.querySelector(".modalContainer");

//crear cabecera
export function crearCabecera(contentTitulo, contentSubTitulo, link, descLink, button, buttonLink) {
    //console.log(document.querySelector(".modalContentContainer").children[1]);
    //crear contenedor
    const modalContentContainer = document.createElement("div");
    modalContentContainer.setAttribute("class", " modalContentContainer");

    //crear titulo
    let titulo = document.createElement("h3");
    titulo.innerText = contentTitulo;
    //subtitulo
    titulo.setAttribute("class", "titleModal")
    let subtitulo = document.createElement("strong");
    subtitulo.innerText = contentSubTitulo;
    //Boton
    let botonDeAccion = document.createElement("button");
    botonDeAccion.innerText = button;
    botonDeAccion.onclick = () => {
        location.href = buttonLink;
    }

    //desplegar elementos en pantalla
    modalContent.appendChild(modalContentContainer);
    modalContentContainer.appendChild(titulo);
    modalContentContainer.appendChild(subtitulo);
    modalContentContainer.appendChild(botonDeAccion);

    //actualizar cantidad de elementos que hay en modal
    modalContentTotal = document.querySelector(".modalContentContainer").children.length;
}

//crearCabecera("Hola mundo","Un proyecto para soñar",'../index.html', "Volver al inicio");

//crear desglose del proyecto
//variable de galeria

export function crearContenidoAdicional(detalles, galery,iframe,button) {
    let modalContentContainer = document.querySelector(".modalContainer").lastChild;
    if (detalles != "" || detalles != null) {

        let textoDetalles = document.createElement("p");
        textoDetalles.innerText = detalles;
        modalContentContainer.appendChild(textoDetalles);
    }
    if (galery != "" || galery != null) {
        //crear contenedor padre
        let contenedorGalery = document.createElement("div");

        contenedorGalery.setAttribute("class", "modalGaleryContainer");

        modalContentContainer.appendChild(contenedorGalery);

        //crear imagenes dentro de contenedor padre
        for (let i = 0; i < galery.length; i++) {

            let image = document.createElement("img");


            image.setAttribute("src", galery[i].src);
            image.setAttribute("alt", galery[i].alt);

            contenedorGalery.appendChild(image);



            //actualizar cantidad de elementos que hay en modal
            // modalContentTotal = document.querySelector(".modalContentContainer").children.length;

        }

        //crearBoton
        //Boton
   
    }


    if (iframe != "" || iframe != null) {
        //crear contenedor padre
        let contenedorGalery = document.createElement("div");

        contenedorGalery.setAttribute("class", "modalGaleryContainer");

        modalContentContainer.appendChild(contenedorGalery);

        //crear imagenes dentro de contenedor padre
        for (let i = 0; i < iframe.length; i++) {

            let frame = document.createElement("iframe");


            frame.setAttribute("src", iframe[i].src);
            

            contenedorGalery.appendChild(frame);



            //actualizar cantidad de elementos que hay en modal
            // modalContentTotal = document.querySelector(".modalContentContainer").children.length;

        }


    }
    let botonDeAccion2 = document.createElement("button");
    botonDeAccion2.innerText = button[0];
    botonDeAccion2.onclick = () => {
        location.href = button[1];
    }
    modalContentContainer.appendChild(botonDeAccion2);

}







// var titulo = document.createElement("h3");
// titulo.innerText = "Proyecto xxxx";
// titulo.setAttribute("class","titleModal")
// var subtitulo = document.createElement("strong");
// subtitulo.innerText = "subtitulo proyecto xxx";
// var botonDeAccion = document.createElement("button");
// botonDeAccion.innerText = "Boton de accion";
// botonDeAccion.setAttribute("onclick","redirreccionar()");

// modalContentContainer.appendChild(titulo);
// modalContentContainer.appendChild(subtitulo);
// modalContentContainer.appendChild(botonDeAccion);


// function redirreccionar(url) {

//     location.href = url.toString();
// }