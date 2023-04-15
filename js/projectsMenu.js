console.log("projectsMenu js activado");

const menuProjects = document.querySelector(".menuProjects");

const listProjects = document.querySelector(".listProjects");
var
    detectListClick;
var counterProjects = 0;
listProjects.onclick = () => {
    detectListClick = true
    console.log("click list " + detectListClick);

}


//Menu de proyectos controlador
menuProjects.onclick = () => {


    if (counterProjects == 0) {
        listProjects.style.display = "block";
        menuProjects.children[0].innerText = "Cerrar Menu"
        ++counterProjects;

    } else if (counterProjects == 1 && detectListClick == false) {
        listProjects.style.display = "none";
        menuProjects.children[0].innerText = "Menu Proyecto"
        counterProjects = 0;
        detectListClick = false;
        console.log("list " + detectListClick);

    }
    detectListClick = false;

};

