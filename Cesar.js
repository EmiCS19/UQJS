
function cifrarCesar(texto, desplazamiento) {
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];

        if (caracter.match(/[a-z]/i)) {
            var codigo = texto.charcodeAt(i);
            var base = (codigo < 91) ? 65 : 97;
            var cifrado = String.fromCharCode(((codigo - base + desplazamiento) % 26) + base);
            resultado += cifrado;
        } else {
            resultado += caracter;
        }
    }
    return resultado;
}
var mensaje = "El grupo 191 es el mejor";
var mensajeCifrado=cifrarCesar(mensaje, 1);
alert("Mensaje cifrado: " + mensajeCifrado);
