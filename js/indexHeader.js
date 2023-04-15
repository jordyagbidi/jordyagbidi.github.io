//Header script
//Desarrollado por Jordy Agbidi Marion Houidji
console.log("Header script: activo");
const iam = document.getElementById("iam");
const header = document.getElementById("header");
const time = 5000;//Tiempo que se tarda en cambiar el texto y imagen de la cabecera

//contador para establecer los cambios que se deben generar
var c = 0;

//contador que determina cuantos scrolls se ha echo
var counterScroll;

//Quien soy: texto h2
var iamTxt = [
    "Programador Web",
    "Frontend 75% Backend 25%",
    "Técnico Informático",
    "Artista",
    "Emprendedor",
    "Africano",
    "Gran persona"
];

//Imagenes de fondo de cabecera
var iamBack = [
    "media/img/01.jpg",
    "media/img/02.jpg",
    "media/img/03.jpg",
    "media/img/04.jpg",
    "media/img/05.jpg",
    "media/img/06.jpg",
    "media/img/07.png"
];

//detectar scrolling
console.log(window.scroll);
//determina la altura total de la pantalla para comparar la con statusH
var headerH = window.screen.height;
//devuelve true o false para saber si header es visible o no
var statusH = analizeScroll();

//Variable de animacion de header
var animationHeader = setInterval(() => { changeHeader() }, time);


//cuando la pagina cargue
document.body.onload = (e) => {
    e.preventDefault();
    //actualizamos el valor de status
    statusH = analizeScroll();
    console.log("statusH: " + statusH);
}


//evento scroll, que por cada scroll ejecuta las siguientes instrucciones
window.document.onscroll = (e) => {
    e.preventDefault();
    //actualizar valor de status true o false
    statusH = analizeScroll();
    //si es falso es decir que header no es visible
    if (statusH == false) {
        //detenomos la animacion
        clearInterval(animationHeader);
        // animation = null;

        //reiniciamos y detenemos el contador de scroll cuando header ya no sea visible
        counterScroll = 0;
    }
    //si el header es visible (status true) y se ha echo el primer scroll ejecuta la funcion changeHeader por cada x (time) segundos. con esto evitamos que el setInterval se ejecute por cada scroll realidado.
    if (statusH == true && counterScroll == 1) {
        animationHeader = setInterval(() => { changeHeader() }, time);
    }
    //el contador nos permite indicar cuantos scroll estamos haciendo
    //sumamos el contador de scroll en cada scroll
    ++counterScroll;
}




//Esta funcion determina la posicion scrollY y retorna verdadero o falso en funcion de si estamos en el rango de la cabecera o no.
function analizeScroll() {
    //console.log(window.scrollY);
    //si la posicion del scroll es inferior a la altura total de la pantalla (es decir que estamos todavia al inicio de la pagina que ocupa la altura completa ) es que estamos en el header
    if (window.scrollY < headerH) {
        console.log("Header es visible");
        return true;
    } else if (window.scrollY > headerH) {
        //si es el caso contrario ya no estamos viendo header
        console.log("Header no es visible");
        return false;
    }
}

function changeHeader() {
    //actualizamos statusH
    statusH = analizeScroll();

    console.log("contador : " + c)
    //si seguimos viendo el header
    if (statusH) {
        //cambiamos descripcion de la cabecera
        iam.innerText = iamTxt[c];
        //Cambiar imagen de cabecera
        header.style.backgroundImage = "url(" + iamBack[c] + ")";
        //Actualizar contador
        //de esta manera cuando el setInterval vuelva a ejecutar la funcion nos mostra la siguiente imagen y texto
        ++c;
        //Reiniciar contador
        //si la cantidad de cambios equivale a la cantidad de textos que deberemos cambiar volvemos el contador a cero
        if (c == iamTxt.length) { c = 0 }

    }
}






