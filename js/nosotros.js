const alumnos = [
    { nombre: 'Hernan Rojas', descripcion: 'Me gustó mucho esto de la programación y quiero seguir enfocado en mis estudios para asi a futuro centrarme en el desarrollo de aplicaciones.', imagen: 'card1.jpeg' },
    { nombre: 'Luciana Centeno', descripcion: 'Entusiasta de la tecnología y la programación, me gustaria seguir capacitandome aun más para que en el futuro pueda desempeñarme de la mejor manera.', imagen: 'card2.jpg' },
];

const contenedorAlumnos = () => {
const contenedor = document.getElementById('contenedorCards');

alumnos.forEach(alumno => {
const card = document.createElement('div');
card.classList.add('col-sm-3', 'mb-3');
card.innerHTML = `
    <div class="card">
        <img src="/img/${alumno.imagen}" class="card-img-top" alt="Foto de ${alumno.nombre}">
        <div class="card-body">
            <h5 class="card-title">${alumno.nombre}</h5>
            <p class="card-text">${alumno.descripcion}</p>
            <div class="redesNosotros">
                
            </div>
        </div>
    </div>
`;

contenedor.appendChild(card);

    });
};

contenedorAlumnos();
