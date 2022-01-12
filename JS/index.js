console.log( "Hola desde la Consola!" )


function likes( elemento ){
    console.log( "Ninja was liked" );
    alert( "Ninja was liked" );
}

function remueveElemento( elemento ){
    elemento.remove();
}

function cambiaTexto( elemento ){
    elemento.innerText = "Logout";
}

function efectoSobreElemento( elemento ){
    let texto = elemento.innertText;
    console.log( texto );
}