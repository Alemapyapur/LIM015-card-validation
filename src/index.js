import validator from './validator.js';

// console.log(validator);
    let msjresultado = document.querySelector(".msjresultado");
    msjresultado.style.display="none";

let btnValidar = document.getElementById("validar")
function capturanumero (){
    let numerodetarjeta = document.getElementById("creditCardNumber").value;
    // console.log(validator.isValid(numerodetarjeta))
    // console.log(validator.maskify(numerodetarjeta))
    document.getElementById("resultado").innerText = validator.maskify(numerodetarjeta)

    msjresultado.style.display="block";
    let result =  validator.isValid(numerodetarjeta);
    if (result) {
        document.getElementById("trueOrFalse").innerText ="Tarjeta Valida";
    } else {
        document.getElementById("trueOrFalse").innerText ="Tarjeta Invalida";
    }
}

btnValidar.addEventListener( "click", capturanumero)


