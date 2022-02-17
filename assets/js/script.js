const validarNumero = () => { // Validacion del numero
    const solicitarN = prompt("Ingrese un numero para mostrar su tabla");
    if (solicitarN < 1 || solicitarN > 20) {
        alert(`El número ${solicitarN} esta fuera del rango.\n\nPor favor ingresar un nuevo numero entre 1 y 20.`);
        return validarNumero();
    } else {
        return solicitarN;
    }

}

const factorial = numeroFact => { // Factorial Recursivo
    if (numeroFact === 0 || numeroFact === 1) {
        return 1;
    } else {
        const resultadoF = numeroFact * factorial(numeroFact - 1);
        return resultadoF
    } // Ejemplo usando al 5 para entender su logica: 5 * (5 - 1 (4 - 1 (3 - 1 (2 - 1 ( 1 ))))) => (5 * (4 * (3 * (2 * (1 * (1))))))
}

const numeroTabla = parseInt(validarNumero());

// Solucion del ejercicio
for (let i = 1; i <= numeroTabla; i++) {

    const resultado = i * numeroTabla;
    console.log(`${i} x ${numeroTabla} = ${resultado}`);

    if (i === numeroTabla) {
        for (let i = 1; i <= numeroTabla; i++) {
            const resultadoFactorial = factorial(i);
            console.log(`El factorial de ${i} es ${resultadoFactorial}`);
        }
    }
}


