let num1=parseFloat(prompt(`Dame el primer numero`));
let num2=parseFloat(prompt(`Dame el segundo numero`));

function eval() {
    let mayor= (num1>num2) ? num1 : num2;  
    alert(`El numero mayor es ${mayor}`);
}
eval();
