const formConsulta = document.getElementById('formConsulta');

formConsulta.addEventListener('submit', function(event) {
    event.preventDefault();

    // Aquí puedes agregar el código para enviar la consulta si es necesario
    
    // Limpiar el formulario después de enviarlo
    formConsulta.reset();

    // Mostrar un mensaje de alerta
    alert('¡Su consulta se envió correctamente!');
});

// const formConsulta = document.getElementById('formConsulta');

// formConsulta.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(formConsulta);
//     const consultaData = {
//         nombre: formData.get('nombre'),
//         email: formData.get('email'),
//         mensaje: formData.get('mensaje')
//     };

//     // Enviar la consulta por correo electrónico
//     enviarCorreo(consultaData);

//     // Limpiar el formulario después de enviarlo
//     formConsulta.reset();

//     // Mostrar un mensaje de alerta
//     alert('¡Su consulta se envió correctamente!');
// });

// function enviarCorreo(data) {
//     fetch('https://mail.google.com//enviar_correo', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             destinatario: 'herojas.hr2@gmail.com',
//             asunto: 'Consulta de usuario',
//             contenido: `Nombre: ${data.nombre}\nEmail: ${data.email}\nMensaje: ${data.mensaje}`
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Error al enviar el correo');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }


// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware para manejar datos JSON
// app.use(express.json());

// // Ruta para enviar correo electrónico
// app.post('/enviar_correo', (req, res) => {
//     const { destinatario, asunto, contenido } = req.body;

//     // Configuración de nodemailer (puedes ajustarla según tu proveedor de correo electrónico)
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'tu_correo@gmail.com',
//             pass: 'tu_contraseña'
//         }
//     });

//     // Opciones del correo electrónico
//     const mailOptions = {
//         from: 'tu_correo@gmail.com',
//         to: destinatario,
//         subject: asunto,
//         text: contenido
//     };

//     // Enviar el correo electrónico
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Error al enviar el correo electrónico');
//         } else {
//             console.log('Correo electrónico enviado: ' + info.response);
//             res.status(200).send('Correo electrónico enviado correctamente');
//         }
//     });
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor backend iniciado en http://localhost:${PORT}`);
// });