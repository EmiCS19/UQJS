let entrada = parseInt(prompt('Ingresa un number'));

switch (entrada) {
    case 1:
        alert('Hoy es lunes!')
        alert('Gambare!');
        break;
    case 2:
        alert('Hoy es Martes')
        alert('Tu puedes!');
        break;
    case 3:
        alert('Hoy es Miércoles!')
        alert('Echele ganas mijo');
        break;
    case 4:
        alert('Hoy es Jueves!')
        alert('Feliz Jueves! (German accent)');
        break;
    case 5:
        alert('Hoy es Viernes!')
        alert('Viernes de ahogarse en alcohol');
        break;
    case 6:
        alert('Hoy es Sábado!')
        alert('No hay de otra toca disfrutar el día');
        break;
    case 7:
        alert('Hoy es Domi!')
        alert('Disfruta el día como si fuera el último día antes del Lunes!');
        break;

    default:
        alert('Que carajos te pasa este no es un día de la semana, sorete');
        break;
}