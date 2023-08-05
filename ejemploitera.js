var n = parseFloat(prompt(`Dame los datos perra`));
if (isNaN(n)) {
    alert(`Hijo de perra no escribiste un numero`);
} else {
    var m = 1;
    while (m <= 10) {
        document.writeln(`${n} X ${m}=` + n * m + `<br>`);
        m++;
    }
}