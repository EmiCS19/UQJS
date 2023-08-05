
function guardarnums(num) {
    for (let k = 1; k <= num/2; k++) {
        let arreglo = [];
        let numspfct = [];
        let suma = 0;
        let pos = 0;

        for (let i = 1; i < k; i++) {
            if (k % i === 0) {
                arreglo[pos] = i;
                pos++;
            }
        }

        for (let j = 0; j < arreglo.length; j++) { //sumar los numero del arreglo
            suma += arreglo[j];
        }

        if (suma === k) {
            document.writeln(`${k}, `);
        }
    }
}

let numero = parseInt(prompt(`Ingresa hasta que numero quieres comprobar`));

guardarnums(numero);


