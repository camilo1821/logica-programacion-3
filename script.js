const positivo = document.getElementById("positivo");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");


boton.addEventListener('click', () => {


    const numeroIngresado = positivo.value;
    const numero = Number(numeroIngresado);

    if (numeroIngresado === "" || !Number.isInteger(numero) || numero < 0) {
        resultado.textContent = "Ingrese un número válido (entre 0 y 170)";
        return;
    }

    let factorial = 1;
    for (let i=1; i<=numero; i++) {
        factorial *= i;

    }

    resultado.textContent = `${factorial}`;
})