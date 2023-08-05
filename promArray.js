let arreglo=[17,20,10,9,9,5,2];
alert( `EL arreglo de numeros es ${arreglo}`);
let suma=0, promedio;

for (let i = 0; i < arreglo.length; i++) {
     suma += arreglo[i];
}

promedio=suma/arreglo.length;

alert(`El promedio del arreglo es ${promedio}`);