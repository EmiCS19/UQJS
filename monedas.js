let ejemplo = Math.round(Math.random() * (10 - 1) + 1);
let monedafalsa = Math.round(Math.random() * (7 - 0) + 0);

var clickcount=0;

var mon1 = ejemplo
var mon2 = ejemplo
var mon3 = ejemplo
var mon4 = ejemplo
var mon5 = ejemplo
var mon6 = ejemplo
var mon7 = ejemplo
var mon8 = ejemplo
var monedas = [mon1, mon2, mon3, mon4, mon5, mon6, mon7, mon8]
var ArregloIzq = [];
var ArregloDer = [];
var ArregloDer2 =[];
var ArregloIzq2 =[];

monedas[monedafalsa] = ejemplo + 1;

function usar1() {
    document.getElementById("select1").disabled=false;
    document.getElementById("select2").disabled=false;
    document.getElementById("select3").disabled=false;
    document.getElementById("select4").disabled=false;
    document.getElementById("select5").disabled=false;
    document.getElementById("select6").disabled=false;
    document.getElementById("select7").disabled=false;
    document.getElementById("select8").disabled=false;
    let btn;
    let sumaIzq = 0;
    let sumaDer = 0;

    for (let i = 0; i < ArregloIzq.length; i++) {
        sumaIzq = ArregloIzq[i] + sumaIzq;
    }

    for (let j = 0; j < ArregloDer.length; j++) {
        sumaDer = ArregloDer[j] + sumaDer;
    }

    if (sumaIzq > sumaDer) {
        document.getElementById("parrafo").innerHTML = `El lado izquierdo esta más pesado`;
    } else if (sumaIzq < sumaDer) {
        document.getElementById("parrafo").innerHTML = `El lado derecho esta más pesado`;
    } else if (sumaDer === sumaIzq) {
        document.getElementById("parrafo").innerHTML = `Ambos lados pesan lo mismo`;
    }

    ArregloIzq.splice(0,ArregloIzq.length);
    ArregloDer.splice(0,ArregloDer.length);

    clickcount++;

    document.getElementById("parrafo2").innerHTML = `Ya uso el botón ${clickcount} veces y la balanza quedo como:<br> 
    <b>Lado Izquierdo:</b> ${ArregloIzq2}<br> 
    <b>Lado Derecho:</b>  ${ArregloDer2}`;

    ArregloIzq2.splice(0,ArregloIzq2.length);
    ArregloDer2.splice(0,ArregloDer2.length);


    if (clickcount===2) {
        document.getElementById("boton1").disabled = true;
        document.getElementById("txtcomp").disabled=false;
        document.getElementById("btncompr").disabled=false;

    }

}// fin de usar 1

function btncomprobar(){
    let answer=parseInt(document.getElementById("txtcomp").value);
    if (answer===monedafalsa+1) {
        alert('Estás en lo correcto');
    } else{
        alert('Estás mal');
    }
}//fin de boton de comprobar

function limpiar() {
    document.getElementById("select1").selectedIndex = 0;
    document.getElementById("select2").selectedIndex = 0;
    document.getElementById("select3").selectedIndex = 0;
    document.getElementById("select4").selectedIndex = 0;
    document.getElementById("select5").selectedIndex = 0;
    document.getElementById("select6").selectedIndex = 0;
    document.getElementById("select7").selectedIndex = 0;
    document.getElementById("select8").selectedIndex = 0;
}

function balancear1() {
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    document.getElementById("select1").disabled=true;
    let elecc = document.getElementById('select1');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[0]);
            ArregloIzq2.push(' Moneda 1');
            break;
        case 2:
            ArregloDer.push(monedas[0]);
            ArregloDer2.push(' Moneda 1');
            break;
        case 3:

            break;

        default:
            break;
    }
    /*
    for (let i = 0; i < monedasIzqu; i++) {
        ArregloIzq[i]=monedas[i];
        
    }

    for (let j= 0; j < monedasDer; j++) {
        j2=1;
        ArregloDer[j]=monedas[ArregloIzq.length+j];
        j2++;
        
    }
    */
}//balancear1

function balancear2() {
    document.getElementById("select2").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select2');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[1]);
            ArregloIzq2.push(' Moneda 2');
            break;
        case 2:
            ArregloDer.push(monedas[1]);
            ArregloDer2.push(' Moneda 2');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 2 

function balancear3() {
    document.getElementById("select3").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select3');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[2]);
            ArregloIzq2.push(' Moneda 3');
            break;
        case 2:
            ArregloDer.push(monedas[2]);
            ArregloDer2.push(' Moneda 3');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 3

function balancear4() {
    document.getElementById("select4").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select4');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[3]);
            ArregloIzq2.push(' Moneda 4');
            break;
        case 2:
            ArregloDer.push(monedas[3]);
            ArregloDer2.push(' Moneda 4');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 4

function balancear5() {
    document.getElementById("select5").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select5');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[4]);
            ArregloIzq2.push(' Moneda 5');
            break;
        case 2:
            ArregloDer.push(monedas[4]);
            ArregloDer2.push(' Moneda 5');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 5

function balancear6() {
    document.getElementById("select6").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select6');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[5]);
            ArregloIzq2.push(' Moneda 6');
            break;
        case 2:
            ArregloDer.push(monedas[5]);
            ArregloDer2.push(' Moneda 6');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 6

function balancear7() {
    document.getElementById("select7").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select7');
    let incel = elecc.selectedIndex;

    switch (incel) {
        case 1:
            ArregloIzq.push(monedas[6]);
            ArregloIzq2.push(' Moneda 7');
            break;
        case 2:
            ArregloDer.push(monedas[6]);
            ArregloDer2.push(' Moneda 7');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 7

function balancear8() {
    document.getElementById("select8").disabled=true;
    //let monedasIzqu = parseInt(document.getElementById("balleft").value);
    let elecc = document.getElementById('select8');
    let incel = elecc.selectedIndex;

    switch (incel) {

        case 0:
            break;

        case 1:
            ArregloIzq.push(monedas[7]);
            ArregloIzq2.push(' Moneda 8');
            break;
        case 2:
            ArregloDer.push(monedas[7]);
            ArregloDer2.push(' Moneda 8');
            break;
        case 3:

            break;

        default:
            break;
    }
}//balancear 8

