var espacios=parseInt(prompt('Ingrese cuantos espacios va a usar'));

function descifrarCesar(textoCifrado, desplazamiento) {
    var resultado = "";

    for (var i = 0; i < textoCifrado.length; i++) {
        var caracter = textoCifrado[i];
        
        if (caracter.match(/[a-z]/i)) {
            var codigo = textoCifrado.charCodeAt(i);
            var base = (codigo < 91) ? 90 : 122;
            var descifrado = String.fromCharCode(((codigo - base - desplazamiento) % 26) + base);
            resultado += descifrado;
        } else {
            resultado += caracter;
        }
    }
    return resultado;
}//fin de descifrar CESAR

function cifrarCesar(texto, desplazamiento) {
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];
        
        if (caracter.match(/[a-z]/i)) {
            var codigo = texto.charCodeAt(i);
            var base = (codigo < 91) ? 65 : 97;
            var cifrado = String.fromCharCode(((codigo - base + desplazamiento) % 26) + base);
            resultado += cifrado;
        } else {
            resultado += caracter;
        }
    }
    return resultado;
}//fin de cifrar cesar

function descifrarMensaje() {
    var mensajeCifradoInput = document.getElementById('mensajeDes');
    var mensajeCifrado = mensajeCifradoInput.value;
    var mensajeDescifrado = descifrarCesar(mensajeCifrado, espacios);
    alert("Mensaje descifrado: " + mensajeDescifrado);
}

function cifrarMensaje() {
    var mensajeCifradoInput = document.getElementById('m');
    var mensajeCifrado = mensajeCifradoInput.value;
    var mensajeDescifrado = cifrarCesar(mensajeCifrado, espacios);
    alert("Mensaje cifrado: " + mensajeDescifrado);
}
