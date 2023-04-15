console.log("preventCopy js activado");

//impedir copia del contenido de la web
window.document.body.oncopy = (e)=>{
    e.preventDefault();
    console.log("COPIA_NO_PERMITIDA: Impidiendo copia de contenido");
    //retornando false inabilitamos el evento
    return false;
}

//impedir que salga menu de opciones del click derechoole.log("index js - evento copia")
window.document.body.oncontextmenu = (e)=>{
    console.log("index js - evento clic derecho detectado");
    e.preventDefault();
    console.log("CLIC_DERECHO_NO_PERMITIDO: Impediendo clic derecho en la web");
    //retornando false inabilitamos el evento
    return false;
}

//impedir que se seleccione elementos de la pagina
function evitarSeleccion( target ) {
    console.log("index js - evitando seleccion")
    if ( typeof target.onselectstart != "undefined" ) {
        console.log("index js - inicio de una seleccion detectado");
        console.log(target.onselectstart);
       target.onselectstart = function( ) {console.log("index js - Evitando inicio de seleccion - Selección no permitida"); return false; }
    }
    else if ( typeof target.style.MozUserSelect != "undefined" ) {
        console.log("index js - MozUserSElect");
        console.log(target.style.MozUserSelect);
        target.style.MozUserSelect = "none";
    }
    else {
       target.onmousedown = function( ) { console.log("index js - Evitando mouse clic o doble tap"); return false; }
    }
    
    target.style.cursor = "default";
 }
  

 
