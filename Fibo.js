function generarPiramidePascal(filas) {
    var triangulo = [];
    
    for (var i = 0; i < filas; i++) {
      triangulo[i] = [];
      triangulo[i][0] = 1;
      
      for (var j = 1; j < i; j++) {
        triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
      }
      
      triangulo[i][i] = 1;
    }
    
    return triangulo;
  }
  
  function mostrarPiramidePascal(filas) {
    var piramide = generarPiramidePascal(filas);
    
    for (var i = 0; i < filas; i++) {
      var espacios = " ".repeat(filas - i - 1);
      var fila = "";
      
      for (var j = 0; j <= i; j++) {
        fila += piramide[i][j] + " ";
      }
      
      console.log(espacios + fila);
    }
  }
  
  // Ejemplo de uso:
  var numFilas = parseInt(prompt("Ingrese el número de filas para la pirámide de Pascal:"));
  mostrarPiramidePascal(numFilas);
  