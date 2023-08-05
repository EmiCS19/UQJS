let meses=['enero', 'febrero', 'martes', 'lunes']
let dias=meses.splice(0,2)

let meses2=['enero', 'febrero', 'martes', 'lunes']
let dias2=meses2.splice(3,0,'Diciembre', 'noviembre')

document.writeln(`${meses} <br>`)
document.writeln(`${meses2} <br>`)