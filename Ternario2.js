function typeN() {
    let number = parseFloat(prompt(`Ingrese su number`));
    number === 0 ? alert(`Es 0`) : number > 0 ? alert(`Es positivo`) : alert(`Negativo`) 

}

typeN();