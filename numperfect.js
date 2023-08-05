var arreglo = []
var suma = 0;
let numero = parseInt(prompt(`Ingresa el numero que quieras comprobar`));
var pos=0;
function guardarnums(num) {
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arreglo[pos] = i;
            pos++;
        }
    }

    for (let j = 0; j < arreglo.length; j++) { //sumar los numero del arreglo
        suma += arreglo[j]
    }

    if (suma === num) {
        alert(`El numero es perfecto`);
    } else {
        alert(`El numero no es perfecto`);
    }


}

guardarnums(numero);


