const nav = document.querySelector("#navbar");
const navOpt = [
    "Inicio",
    "Sobre Mi",
    "Habilidades",
    "Proyectos",
    "Servicios",
    "Contacto"
];
const navId = [
    "inicio",
    "sobremi",
    "habilidades",
    "proyectos",
    "servicios",
    "contacto"
];

const  localhost = "https://jordyagbidi.github.io/";
const locationMenu = [
    localhost+"index.html",
    localhost+"index.html#sec0",
    localhost+"index.html#sec1",
    localhost+"pages/projects.html",
    localhost+"pages/services.html",
    localhost+"pages/contact.html"
];

var menu = [];

function createNavigator(){
    let i = 0;
    let element = [];
    let displayMenu = document.createElement("span");
    displayMenu.setAttribute("class","optMenu displayMenu");
    
    displayMenu.setAttribute("id","displayMenu");
    displayMenu.innerText="MENU";
    nav.appendChild(displayMenu);

    let displayerMenu = document.createElement("div");
    displayerMenu.setAttribute("class","displayerMenu");
    nav.appendChild(displayerMenu);

    navOpt.forEach(e => {
        element[i] = document.createElement("span");

        element[i].setAttribute("class","optMenu");
        element[i].setAttribute("id",navId[i]);
        element[i].innerText = e;
        displayerMenu.appendChild(element[i]);

        menu[i] = element[i];
        ++i;
    });
    
}

function navegationControl(){
   
    menu.forEach(e => {
        let i = 0;
        e.onclick = () =>{
           
            for (i = 0; i < navOpt.length; i++) {
                // const element = array[i];
                if(e.innerText==navOpt[i]){
                    location.href = locationMenu[i];
                }
                
            }
            // location.href = locationMenu[0];
            // if(e.innerText=="Inicio"){
            //     i=0;
            // }else if(e.innerText=="Sobre Mi"){
            //     i=1;
            // }else if(e.innerText=="Habilidades"){
            //     i=2;
            // }else if(e.innerText=="Proyectos"){
            //     i=3;
            // }else if(e.innerText=="Servicios"){
            //     i=4;
            // }else if(e.innerText=="Contacto"){
            //     i=5;
            // }
            // alert(e.innerText+"--"+i+"--"+locationMenu[i])
            // alert(i);
            // location.href = locationMenu[i];
        
        }
       
        
    });
}


createNavigator();
navegationControl();

var countermenu = 0;

const menuPhone = document.querySelector("#displayMenu");
const menuPhoneBox = document.querySelector(".displayerMenu");
menuPhone.onclick = ()=>{
    if(countermenu == 0){
        menuPhone.innerText = "CERRAR MENU";
        menuPhoneBox.style.display = "block";
        ++countermenu;
    }else if(countermenu ==1){
        menuPhone.innerText = "MENU";
        menuPhoneBox.style.display = "none";
        countermenu =0;
    }

};
