/*
1. Crea un programa, que solicite al usuario ingresar un numero del 1 al 7, estos numeros representaran los dias de la semana, al seleccionarlo, mostrara el dia correspondiente
2. Crea un programa que muestre mensajes de apoyo o motivacionales, dependiendo del dia de la semana, donde el usuario ingresa un dia y el programa le despliega el mensaje
3. Crea un programa que verifique si un numero determinado por el usuario es mayor, menor o igual a 10
Spoiler hacer el codigo cesar al reves
*/

let entrada=parseFloat(prompt('Ingresa un number'));
if (entrada>10) {
  document.writeln('El numero es mayor a 10');
}else if(entrada<10){
  document.writeln('El numero es menor a 10');
} else {
  document.writeln('El number es 10');
}

