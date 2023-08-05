let day = parseInt(prompt(`Ingresa solo el dia en que naciste`))
let mes = parseInt(prompt(`Ingresa solo el mes en que naciste`))
let year = parseInt(prompt(`Ingresa solo el año en que naciste`))

if (mes === 3 && day >= 21 && day < 32) {
    alert(`Sos aries`);
} else if (mes === 4 && day <= 19 && day < 31) {
    alert(`Sos aries`);
} else if (mes === 4 && day >= 20 && day < 31) {
    alert(`Sos Tauro`);
} else if (mes === 5 && day <= 20 && day < 31) {
    alert(`Sos tauro`);
} else if (mes === 5 && day >= 21 && day < 32) {
    alert(`Sos geminis`);
} else if (mes === 6 && day <= 20 && day < 31) {
    alert(`Sos geminis`);
} else if (mes === 6 && day >= 21 && day < 31) {
    alert(`Sos cancer`);
} else if (mes === 7 && day <= 22 && day < 32) {
    alert(`Sos cancer`);
} else if (mes === 7 && day >= 23 && day < 32) {
    alert(`Sos Leo`);
} else if (mes === 8 && day <= 22 && day < 32) {
    alert(`Sos Leo`);
} else if (mes === 8 && day >= 23 && day < 32) {
    alert(`Sos Virgo`);
} else if (mes === 9 && day <= 22 && day < 31) {
    alert(`Sos Virgo`);
} else if (mes === 9 && day >= 23 && day < 31) {
    alert(`Sos Libra`);
} else if (mes === 10 && day <= 22 && day < 31) {
    alert(`Sos Libra`);
} else if (mes === 10 && day >= 23 && day < 31) {
    alert(`Sos Escorpio`);
} else if (mes === 11 && day <= 21 && day < 31) {
    alert(`Sos Escorpio`);
} else if (mes === 11 && day >= 22 && day < 31) {
    alert(`Sos Sagitario`);
} else if (mes === 12 && day <= 21 && day < 31) {
    alert(`Sos Sagitario`);
} else if (mes === 12 && day >= 22 && day < 31) {
    alert(`Sos Capricornio`);
} else if (mes === 1 && day <= 19 && day < 32) {
    alert(`Sos Capricornio`);
} else if (mes === 1 && day >= 20 && day < 32) {
    alert(`Sos Acuario`);
} else if (mes === 2 && day <= 18 && day < 30) {
    alert(`Sos Acuario`);
} else if (mes === 2 && day >= 19 && day < 30) {
    alert(`Sos Acuario`);
}

function edad() {
    var fechaActual = new Date();
    var yearActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
    var diaActual=fechaActual.getDate();

    var age= yearActual-year;
    if (mes>mesActual) {
        age--;
    } else if (mes==mesActual) {
        if (day>diaActual) {
            age--;
        }
    }
    alert(`Tu edad es ${age}`);
}

edad();