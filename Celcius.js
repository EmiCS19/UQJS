function CelciusAF() {
    let grados = parseFloat(prompt(`Ingresa los grados que quiera convertir a Farenheit`));
    let gradosF = (grados * 1.8) + 32;
    alert(`Los grados Farenheit son ${gradosF}`);
}
function FarenAC() {
    let grados = parseFloat(prompt(`Ingresa los grados que quiera convertir a Celcius`));
    let gradosC = (grados-32)/1.8;
    alert(`Los grados Celcius son ${gradosC}`);
}

let tipo = parseInt(prompt(`Ingrese 1 para Celcius a Farenheit y 2 para Farenheit a Celcius`));
switch (tipo) {
    case 1:
        CelciusAF();
        break;
    case 2:
        FarenAC();
        break;

    default:
        alert(`Ingrese un numero valido`)
        break;
}