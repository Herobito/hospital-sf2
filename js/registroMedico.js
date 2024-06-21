
// const registroMedico = document.getElementById('registroMedico');
// registroMedico.addEventListener('submit', function(event) {
// event.preventDefault();

// const nombre = registroMedico.elements['nombre'].value;
// const apellido = registroMedico.elements['apellido'].value;
// const correo = registroMedico.elements['correo'].value;
// const telefono = registroMedico.elements['telefono'].value;
// const especialidad = registroMedico.elements['especialidad'].value;
// const usuarioMedico = registroMedico.elements['usuarioMedico'].value;
// const contraseñaMedico = registroMedico.elements['contraseñaMedico'].value;


// // GUARDANDO DATOS
// localStorage.setItem('nombre', nombre);
// localStorage.setItem('apellido', apellido);
// localStorage.setItem('correo', correo);
// localStorage.setItem('telefono', telefono);
// localStorage.setItem('especialidad', especialidad);
// localStorage.setItem('usuarioMedico', usuarioMedico);
// localStorage.setItem('contraseñaMedico', contraseñaMedico);

// alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

// });

// //BOTON VOLVER PARA INICIAR SESION
// const btnVolver = document.getElementById('btnVolver');

// btnVolver.addEventListener('click', function() {
//   window.location.href = '../pages/inicioMedico.html'; 
// });


// const registroMedico = document.getElementById('registroMedico');
// registroMedico.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const nombre = registroMedico.elements['nombre'].value;
//     const apellido = registroMedico.elements['apellido'].value;
//     const correo = registroMedico.elements['correo'].value;
//     const telefono = registroMedico.elements['telefono'].value;
//     const especialidad = registroMedico.elements['especialidad'].value;
//     const usuarioMedico = registroMedico.elements['usuarioMedico'].value;
//     const contraseñaMedico = registroMedico.elements['contraseñaMedico'].value;
//     const codigoAcceso = registroMedico.elements['codigoAcceso'].value; // Nuevo campo

//     // Guardando datos
//     localStorage.setItem('nombre', nombre);
//     localStorage.setItem('apellido', apellido);
//     localStorage.setItem('correo', correo);
//     localStorage.setItem('telefono', telefono);
//     localStorage.setItem('especialidad', especialidad);
//     localStorage.setItem('usuarioMedico', usuarioMedico);
//     localStorage.setItem('contraseñaMedico', contraseñaMedico);
//     localStorage.setItem('codigoAcceso', codigoAcceso); // Guardar código de acceso

//     alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
// });

// // Botón volver para iniciar sesión
// const btnVolver = document.getElementById('btnVolver');
// btnVolver.addEventListener('click', function() {
//     window.location.href = '../pages/inicioMedico.html'; 
// });


// const registroMedico = document.getElementById('registroMedico');
// registroMedico.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const nombre = registroMedico.elements['nombre'].value;
//     const apellido = registroMedico.elements['apellido'].value;
//     const correo = registroMedico.elements['correo'].value;
//     const telefono = registroMedico.elements['telefono'].value;
//     const especialidad = registroMedico.elements['especialidad'].value;
//     const usuarioMedico = registroMedico.elements['usuarioMedico'].value;
//     const contraseñaMedico = registroMedico.elements['contraseñaMedico'].value;
//     const codigoAcceso = 'codigo_secreto'; // Código de acceso fijo

//     // Guardando datos
//     localStorage.setItem('nombre', nombre);
//     localStorage.setItem('apellido', apellido);
//     localStorage.setItem('correo', correo);
//     localStorage.setItem('telefono', telefono);
//     localStorage.setItem('especialidad', especialidad);
//     localStorage.setItem('usuarioMedico', usuarioMedico);
//     localStorage.setItem('contraseñaMedico', contraseñaMedico);
//     localStorage.setItem('codigoAcceso', codigoAcceso); // Guardar código de acceso

//     alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
// });

// // Botón volver para iniciar sesión
// const btnVolver = document.getElementById('btnVolver');
// btnVolver.addEventListener('click', function() {
//     window.location.href = '../pages/inicioMedico.html'; 
// });


// Define el código de acceso
let codigoAcceso = 'Hernan'; // Código de acceso inicial

const registroMedico = document.getElementById('registroMedico');

registroMedico.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = registroMedico.elements['nombre'].value;
    const apellido = registroMedico.elements['apellido'].value;
    const correo = registroMedico.elements['correo'].value;
    const telefono = registroMedico.elements['telefono'].value;
    const especialidad = registroMedico.elements['especialidad'].value;
    const usuarioMedico = registroMedico.elements['usuarioMedico'].value;
    const contraseñaMedico = registroMedico.elements['contraseñaMedico'].value;
    const codigoIngresado = registroMedico.elements['codigoAcceso'].value; // Obtener el código ingresado

    // Verificar si el código ingresado coincide con el código correcto
    if (codigoIngresado === codigoAcceso) {
        // Guardar datos solo si el código es correcto
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('apellido', apellido);
        localStorage.setItem('correo', correo);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('especialidad', especialidad);
        localStorage.setItem('usuarioMedico', usuarioMedico);
        localStorage.setItem('contraseñaMedico', contraseñaMedico);
        localStorage.setItem('codigoAcceso', codigoIngresado);

        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    } else {
        // Mostrar mensaje de acceso denegado si el código es incorrecto
        alert('Acceso denegado. El código de acceso es incorrecto.');
    }
});

// Botón volver para iniciar sesión
const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', function() {
    window.location.href = '../pages/inicioMedico.html'; 
});
