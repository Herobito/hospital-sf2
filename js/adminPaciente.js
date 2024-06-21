document.getElementById('formularioTurno').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombrePaciente = document.getElementById('nombrePaciente').value;
  const dni = document.getElementById('dni').value;
  const fechaTurno = document.getElementById('fechaTurno').value;
  const hora = document.getElementById('hora').value;
  const especialidad = document.getElementById('especialidad').value;

  const nuevoTurno = `
    <tr>
      <td>${nombrePaciente}</td>
      <td>${dni}</td>
      <td>${fechaTurno}</td>
      <td>${hora}</td>
      <td>${especialidad}</td>
    </tr>
  `;

  document.getElementById('turnosBody').innerHTML = nuevoTurno;
});
