fecha= new Date();
alert (Date());

let dia=fecha.getDate();
let mes=fecha.getMonth();
let year=fecha.getFullYear();

alert(`${dia} y ${mes} y año ${year}`);

/*
let day = parseInt(prompt(`Ingresa solo el dia en que naciste`))
let mes = parseInt(prompt(`Ingresa solo el mes en que naciste`))
let year = parseInt(prompt(`Ingresa solo el año en que naciste`))

function edad() {
    var fechaActual = new Date();
    var yearActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
    var diaActual=fechaActual.getDay();

    var age= yearActual-year;
    if (day>diaActual) {
        if (mes>mesActual) {
            age--;     
        }
    }
    alert(`Tu edad es ${age}`);
}

edad();

*/