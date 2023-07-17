const form = document.getElementById('turno-form');
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fecha');
const turnosList = document.getElementById('turnos-list');


document.addEventListener('DOMContentLoaded', function () {
    const turnos = obtenerTurnosDesdeStorage();
    mostrarTurnos(turnos);
});


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nombre = nombreInput.value;
    const fecha = fechaInput.value;


    const turno = {
        nombre,
        fecha
    };


    guardarTurnoEnStorage(turno);


    const turnos = obtenerTurnosDesdeStorage();
    mostrarTurnos(turnos);


    nombreInput.value = '';
    fechaInput.value = '';
});


function guardarTurnoEnStorage(turno) {
    let turnos = obtenerTurnosDesdeStorage();

    turnos.push(turno);

    localStorage.setItem('turnos', JSON.stringify(turnos));
}


function obtenerTurnosDesdeStorage() {
    let turnos;

    if (localStorage.getItem('turnos') === null) {
        turnos = [];
    } else {
        turnos = JSON.parse(localStorage.getItem('turnos'));
    }

    return turnos;
}


function mostrarTurnos(turnos) {
    turnosList.innerHTML = '';

    turnos.forEach(function (turno) {
        const turnoItem = document.createElement('div');
        turnoItem.classList.add('turno');
        turnoItem.innerHTML = `<strong>${turno.nombre}</strong> - ${turno.fecha}`;

        turnosList.appendChild(turnoItem);
    });
}