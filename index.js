function nuevaPelicula(caja, posicion = null) {

    if (caja.parentNode.id === "div-peliculas-vistas") {
        let formularioVistas = document.getElementById("formulario-peliculas-vistas");
        crearPelicula(formularioVistas.listado, posicion);
    } else if (caja.parentNode.id === "div-peliculas-pendientes") {
        let formularioPendientes = document.getElementById("formulario-peliculas-pendientes");
        crearPelicula(formularioPendientes.listado, posicion);
    }
}

function nuevaPeliculaPosicion(caja) {
    let posicion = parseInt(prompt("Indica la posicion")) - 1;
    nuevaPelicula(caja, posicion);
}

function crearPelicula(lista, posicion) {
    let pelicula = prompt("Pelicula a anyadir");
    let option = document.createElement("option");
    option.text = pelicula;

    if (pelicula != null && posicion === null) {
        lista.add(option);
    } else if (pelicula != null && posicion !== null) {
        lista.add(option, posicion);
    }
}

function borrarPeliculaPosicion(caja) {
    let posicion = prompt("Indica posicion de la pelicula que quieres borrar");
    if (caja.parentNode.id === "div-peliculas-vistas") {
        let formularioVistas = document.getElementById("formulario-peliculas-vistas");
        borrarPelicula(formularioVistas.listado, posicion);
    } else if (caja.parentNode.id === "div-peliculas-pendientes") {
        let formularioPendientes = document.getElementById("formulario-peliculas-pendientes");
        borrarPelicula(formularioPendientes.listado, posicion);
    }
}

function borrarPeliculaSeleccionada(caja) {
    let formulario;
    let posicion;
    if (caja.parentNode.id === "div-peliculas-vistas") {
        formulario = document.getElementById("formulario-peliculas-vistas");
    } else if (caja.parentNode.id === "div-peliculas-pendientes") {
        formulario = document.getElementById("formulario-peliculas-pendientes");
    }

    let option = Array.from(formulario.listado.options).filter(option => option.selected === true);

    borrarPelicula(formulario.listado, option[0].index+1);
}

function borrarPelicula(lista, posicion) {
    lista.remove(parseInt(posicion)-1);
    lista.selectedIndex = 0;
}

function introducirAPendiente() {

}

function introducirAVisto() {
    let formulario = document.getElementById("rabio-buttons");
    let pendientes = document.getElementById("formulario-peliculas-pendientes").listado;
    let vistos = document.getElementById("formulario-peliculas-vistas");
    if (formulario.movimientos.value === "mover") {
        let option = Array.from(pendientes.options).filter(option => option.selected === true);
        vistos.listado.add(option[0]);
    } else if (formulario.movimientos.value === "copiar") {
        console.log("Copiando...");
    }
}