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

function introducirAPendientes() {
    let formulario = document.getElementById("rabio-buttons");
    let pendientes = document.getElementById("formulario-peliculas-pendientes");
    let vistas = document.getElementById("formulario-peliculas-vistas").listado;
    let option = Array.from(vistas.options).filter(option => option.selected === true);
    if (formulario.movimientos.value === "mover") {
        pendientes.listado.add(option[0]);
    } else if (formulario.movimientos.value === "copiar") {
        let optionCopy = document.createElement("option");
        optionCopy.text = option[0].text;
        pendientes.listado.add(optionCopy);
    }
}

function introducirAVistas() {
    let formulario = document.getElementById("rabio-buttons");
    let pendientes = document.getElementById("formulario-peliculas-pendientes").listado;
    let vistos = document.getElementById("formulario-peliculas-vistas");
    let option = Array.from(pendientes.options).filter(option => option.selected === true);
    if (formulario.movimientos.value === "mover") {
        vistos.listado.add(option[0]);
    } else if (formulario.movimientos.value === "copiar") {
        let optionCopy = document.createElement("option");
        optionCopy.text = option[0].text;
        vistos.listado.add(optionCopy);
    }
}

function introducir() {
    console.log();
}