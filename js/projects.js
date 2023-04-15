//importar generador de modal
import { crearCabecera,crearContenidoAdicional } from "./projectsModal.js";


console.log("projects js activado");



//variables claves
const proyectosLink = [
    "./../json/projects/webapps.json"
];
var contadorLink = 0;
var idSec = 0;




proyectosLink.forEach(() => {
    pedirProyectos(proyectosLink[contadorLink]);

    ++contadorLink;
});





//Primeros scripts a ejecutar cuando cargue la pagina
window.document.body.onload = (e) => {
    console.log("projects js - evento carga")
    e.preventDefault();
    evitarSeleccion(document.body)
};


//funcion para crear contenedor de proyectos

function crearContainerPros(proyectos) {
    let bigFather = document.querySelector(".bigfatherPro");


    console.log("crear Container Proyectos");

    const registroPro = proyectos.registroProyectos;
    console.log("total gestro proyectos: "+registroPro.length);



    let box = document.createElement("div");
    box.setAttribute("class", "containerPros");
    //crear titulo de seccion
    let titulo = document.createElement("h3");
    titulo.innerText = proyectos.nameSection;

    titulo.setAttribute("id", "sec" + idSec);
    bigFather.appendChild(box);
    box.appendChild(titulo);

    //crear menu de navegacion por secciones
    let menu = document.createElement("a");
    let menuLi = document.createElement("li");
    let menulist = document.querySelector(".listProjects");

    menu.setAttribute("href", "#sec" + idSec);

    menulist.appendChild(menu);

    menuLi.innerText = proyectos.nameSection;
    menu.appendChild(menuLi);
    //esta variable no influye es solo de guia y genera un codigo
    ++idSec;
    //crear caja de proyectos
    for (let i = 0; i < registroPro.length; ++i) {
        let registro = proyectos.registroProyectos[i];
        //esta variable no influye es solo de guia y genera un codigo
        let proCode = "pro" + idSec + "." + i;
        console.log("registro: "+registro);
        let box2 = document.createElement("div");
        box2.setAttribute("class", "containerBoxPro");
        let boxPro = document.createElement("div");
        boxPro.setAttribute("class", "boxPro");

        box.appendChild(box2);
        box2.appendChild(boxPro);
        let portada = document.createElement("img");
        portada.setAttribute("src", registro.portada.src);
        portada.setAttribute("alt", registro.portada.alt);
        let tituloPro = document.createElement("h5");
        tituloPro.innerText = registro.titulo;
        let subtitulo = document.createElement("p");
        subtitulo.innerText = registro.subtitulo;
        let fecha = document.createElement("strong");
        fecha.innerText = registro.fecha;
        let br = document.createElement("br");
        boxPro.appendChild(portada);
        boxPro.appendChild(tituloPro);
        boxPro.appendChild(fecha);
        boxPro.appendChild(br);
        boxPro.appendChild(subtitulo);


        //console.log("fecha ... ".registro.fecha);
        //crear botones
        let botonPro = document.createElement("button");
        //botonPro.setAttribute("id",proCode);
        botonPro.innerText = "Saber mas";;

        subtitulo.innerText = registro.subtitulo;

        boxPro.appendChild(botonPro);

        //detectar clic al boton y mostrar modal
        //desplegar contenido en modal
        botonPro.onclick = () => {
            console.log("activando modal_" + proCode);

            //console.log(i);
            document.querySelector(".modalProjects").style.display = "flex";
            crearCabecera(
                registro.titulo,
                registro.subtitulo,
                registro.portada.src,
                registro.portada.alt,
                registro.button[0],
                registro.button[1]);

            
            crearContenidoAdicional(registro.descripcion, registro.galeria, registro.iframe, registro.button);

           

            //falta crear resto de contenido del modal con la otra funcion modal


        };

    }


}


async function pedirProyectos(id) {
    await fetch(id).then(reponse => reponse.json()).then((data) => {
        crearContainerPros(data);
    }).catch((error) => console.log("error fetch: " + error))
}


