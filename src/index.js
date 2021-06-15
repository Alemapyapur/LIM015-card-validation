import validator from './validator.js';

console.log(validator);

let btnValidar = document.getElementById("validar")
function capturanumero (){
    let numerodetarjeta = document.getElementById("creditCardNumber").value;
    console.log(validator.isValid(numerodetarjeta))
    console.log(validator.maskify(numerodetarjeta))
    document.getElementById("resultado").innerText = validator.maskify(numerodetarjeta)
}

btnValidar.addEventListener( "click", capturanumero)


