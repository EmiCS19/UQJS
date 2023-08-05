// Función para verificar si una palabra es un palíndromo
function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar los espacios
    palabra = palabra.toLowerCase().replace(/\s/g, '');
  
    // Obtener la longitud de la palabra
    var longitud = palabra.length;
  
    // Verificar si la palabra es un palíndromo
    for (var i = 0; i < longitud / 2; i++) {
      if (palabra[i] !== palabra[longitud - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Obtener la palabra ingresada por el usuario
  var palabra = prompt('Ingrese una palabra:');
  
  // Verificar si la palabra es un palíndromo
  if (esPalindromo(palabra)) {
    alert('La palabra "' + palabra + '" es un palíndromo.')
  } else {
    alert('La palabra "' + palabra + '"no es un palíndromo.')
  }
  