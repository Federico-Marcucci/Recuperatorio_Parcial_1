document.getElementById('formularioLibros').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let autor = document.getElementById('autor').value;
    let anio = document.getElementById('anio').value;

    let errores = [];
    if (!nombre) {
        errores.push('Debe indicar el Nombre del libro.');
    }
    if (!autor) {
        errores.push('Debe indicar el Autor del libro.');
    }
    if (!anio) {
        errores.push('Debe indicar el año de publicación del libro.');
    } else if (isNaN(anio)) {
        errores.push('El año de publicación debe ser un número.');
    }

    let errorDiv = document.getElementById('errores');
    errorDiv.innerHTML = '';
    if (errores.length > 0) {
        errores.forEach(function(error) {
            let p = document.createElement('p');
            p.textContent = error;
            errorDiv.appendChild(p);
        });
    } else {
        let table = document.getElementById('tablaLibros').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        let nameCell = newRow.insertCell(0);
        let authorCell = newRow.insertCell(1);
        let yearCell = newRow.insertCell(2);

        nameCell.textContent = nombre;
        authorCell.textContent = autor;
        yearCell.textContent = anio;

        document.getElementById('formularioLibros').reset();
    }
});
