function realizarCalculo(event) {
    event.preventDefault();

    const monto = parseFloat(document.getElementById('monto').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const interesAnual = parseFloat(document.getElementById('interesAn').value) / 100;

    if (monto <= 0 || cuotas <= 0 || !monto || !cuotas || !interesAnual) {
        alert('Por favor, ingrese valores validos.');
        return;
    }

    const interesMensual = interesAnual / 12;
    const cuotaMensual = (monto*interesMensual) + monto/cuotas;
    const totalAPagar = cuotaMensual * cuotas;
    const totalAPagarsinInteres = totalAPagar - interesAnual
    const tiempoTotalPrestamo = cuotas;

    document.getElementById("cuotaMen").textContent = cuotaMensual.toFixed(2);
    document.getElementById("interesMen").textContent = interesMensual.toFixed(2);
    document.getElementById("totalAPagar").textContent = totalAPagar.toFixed(2);
    document.getElementById("totalAPagarSinInteres").textContent = totalAPagarsinInteres.toFixed(2);
    document.getElementById("totalPrestamo").textContent = tiempoTotalPrestamo;

    document.getElementById("resultado").style.display = 'block';
}

function limpiar() {
    document.getElementById('formulario').reset(); 
    document.getElementById("cuotaMen").textContent = "0";
    document.getElementById("totalAPagar").textContent = "0";
    document.getElementById("totalAPagarSinInteres").textContent = "0";
    document.getElementById("totalPrestamo").textContent = "0";

    document.getElementById("resultado").style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', realizarCalculo);
});

function cambiarColorPag(){
    document.body.style.backgroundColor = "green";
}

function cambiarColorPag1(){
    document.body.style.backgroundColor = "#f0eae2";
}