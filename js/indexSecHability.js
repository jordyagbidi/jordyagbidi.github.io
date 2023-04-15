console.log("indexSecHability activado");
//variables claves
//Menu de seccion 2 habilidades
const menuSec2 = document.querySelector(".menuSec2");

//Opciones del menu de la seccion 2
const sec2opt = [
    menuSec2.children[0],
    menuSec2.children[1],
    menuSec2.children[2],
    menuSec2.children[3]
]

var timeOutfooter;

//seccion 2 habilidades contenedor padre
const sec2 = document.querySelector(".section2");


//Variable para guardar las habilidades creadas
var abilities;


//cuando la pagina se cargue que muestre las primera habilidades en lugar de mostrar ninguna
mostrarHabilidades(0);


//eventos clic de cada seccion
sec2opt[0].onclick = async (e) => {
    e.preventDefault();
    console.log("clicando habilidad 1");
    animFooterSec2()
    detectHability(0);

};
sec2opt[1].onclick = (e) => {
    e.preventDefault();
    console.log("clicando habilidad 2");
    animFooterSec2()
    detectHability(1);


};
sec2opt[2].onclick = (e) => {
    e.preventDefault();
    console.log("clicando habilidad 3");
    animFooterSec2()
    detectHability(2);
    

};
// sec2opt[3].onclick = (e) => {
//     e.preventDefault();
//     console.log("clicando habilidad 4");
//     animFooterSec2();
//     detectHability(3);
// };

//animacion footer para evitar que se vea un movimiento brusco al cambiar de seccion
function animFooterSec2(){
    //hacemos invisible el footer para que nos se vea al borrar la seccion para poner otra
    document.querySelector(".footerdata").style.opacity = "0";
    
    //esperamos 2 segundos
    timeOutfooter = setTimeout(()=>{
        console.log("timeOut");
        //volvemos a hcaer visible el pie de pagina
        document.querySelector(".footerdata").style.opacity = "1";
        //detenemos la animacion
        clearTimeout(timeOutfooter);
    },500);
}

//Esta funcion colorea la opcion del menu 2 seleccionado
function detectHability(x) {
    //creamos la habilidad relacionada
    mostrarHabilidades(x);
    console.log("detect Hability");
    //iniciamos un bucle que recorera cada opciones del menu
    for (let i = 0; i < menuSec2.childElementCount; i++) {
        //borra la clase que colorea la opcion selecionada
        menuSec2.children[i].classList.remove("menuSec2selected");
    }
    //ahora si agregamos la clase de seleccion a elemento del menu correspondiente.
    sec2opt[x].classList.add("menuSec2selected");

}



//crear el contenedor de las habilidades y titulo de cada sub apartado.
function createAbilities(sectitle) {
    //agregamos el contenedo a la seccion 2
    sec2.appendChild(abilities);
    //creamos el titulo de h4 de los sub apartados
    const sec2headers = document.createElement("h4");
    //indicamos el titulo
    sec2headers.innerText = sectitle;
    //agregamos el titulo al contenedor de habiidades
    abilities.appendChild(sec2headers);
}

//funcion para crear un bloque de habilidad
function createHability(name, img, alt, stars) {
    //creamos el contenedor div
    const hability = document.createElement("div");
    //le agregamos la clase correspondiente
    hability.setAttribute("class", "hability");
    //añadimos el contenedor en el gran contenedor padre de habilidades
    abilities.appendChild(hability);
    //creamos siguiente contenedor con la configuracion tipo flex
    const divflex = document.createElement("div");
    hability.appendChild(divflex);
    //hacemos lo mismo pero para las la imagenes contenido y otros
    const imghability = document.createElement("img");
    imghability.setAttribute("alt", alt);
    imghability.setAttribute("src", img);
    const namehability = document.createElement("strong");
    namehability.innerText = name;
    const starhability = document.createElement("p");
    starhability.innerHTML = stars;
    divflex.appendChild(imghability);
    divflex.appendChild(namehability);
    divflex.appendChild(starhability);
    //esta funcion se enlazara a la peticion fetch
}

//funcion que inicia la creacion de cada parte de la seccion de habilidades
function mostrarHabilidades(id) {
    //creamos el elemento padre grande 
    console.log("async elements2: " + sec2.children.length);
    //creamos y asignamos las clases correspondientes
    abilities = document.createElement("div");
    abilities.setAttribute("class", "habilitis");
    //pedimos las habilidades que necesitamos
    pedirHabilidades(id);
    
    //si detectamos que en la seccion 2 hay mas de un elemento lo borramos (ya que podria ser el habilitis anterior)
    if (sec2.children.length >= 2) {
        console.log("async elements1: " + sec2.children.length);
        sec2.children[1].remove()
    }
}

//se encarga de traer la informacion pertinente de la seccion habilidades desde los archivos json
async function pedirHabilidades(id) {
    console.log("fetch en accion - pidiendo habilidades");
    //hacemos una peticion al json para que nos entregue la informacion deseada
    await fetch("json/index/abilities/sec" + id + ".json").then(response => response.json()).then(
        (data) => {
            //tratando el valor obtenido
            //detectamos cuantos elementos hay
            let dataLength = data.habilidades[0].content.length;
            console.log("fetch1: " + dataLength);
            //iniciamos un bucle para analizar cuantas secciones tiene la habilidad
            for (let i = 0; i <= dataLength - 1; ++i) {
                let dataTitle = data.habilidades[0].content[i].section;
                createAbilities(dataTitle);
                let dataListLength = data.habilidades[0].content[i].list.length

                console.log("i - grupoHabilidades" + i)

                //iniciamos un bucle por cadad seccion de habilidad y mostramos las habilidades correspondientes.

                for (let x = 0; x <= dataListLength - 1; ++x) {
                    let imgdata = data.habilidades[0].content[i].list[x].img.src;
                    let imgaltdata = data.habilidades[0].content[i].list[x].img.alt;
                    let namedata = data.habilidades[0].content[i].list[x].name;
                    let starsdata = data.habilidades[0].content[i].list[x].stars;
                    console.log("x - habilidad" + x)
                    createHability(namedata, imgdata, imgaltdata, starsdata);
                }
            }
        }
    ).catch((error) => console.log("error fetch: " + error));

}



