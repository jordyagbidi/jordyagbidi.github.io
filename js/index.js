console.log("index js activado");


//Primeros scripts a ejecutar cuando cargue la pagina
window.document.body.onload = (e)=>{
    console.log("index js - evento carga")
    e.preventDefault();

    pedirTextoBio();
    evitarSeleccion(document.body)
};



 //funcion para solicitar el texto de la biografia
 function pedirTextoBio(){
     //desplegar texto de biografia
    const indexBioTxt= document.querySelector(".section1").children[0];
    fetch("json/index/bioText.json").then((response)=>response.json()).then((data)=>{
        indexBioTxt.innerHTML = data.biografia;
    }).catch((error)=>console.log(error));
 }