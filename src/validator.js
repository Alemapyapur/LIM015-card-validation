const validator = {
  // ...
    isValid:(creditCardNumber)=>{
      creditCardNumber = creditCardNumber.split(' ').join("");
      console.log(creditCardNumber)
      if (parseInt(creditCardNumber) <= 0 || (!/\d{10,16}(~\W[a-zA-Z])*$/.test(creditCardNumber)) || creditCardNumber.length > 16) {
    return false;
    }
    let carray = new Array();
    for (let i = 0; i < creditCardNumber.length; i++) {
      carray[carray.length] = creditCardNumber.charCodeAt(i) - 48;
    }
    carray.reverse();
    console.log(carray)
    let sum = 0;
    for (let i = 0; i < carray.length; i++) {
    let tmp = carray[i];
    if ((i % 2) != 0) {
      tmp *= 2;
      if (tmp > 9) {
        tmp -= 9;
      }
    }
    sum += tmp;
  }
  console.log(sum)
  return ((sum % 10) == 0);
  },

  maskify:(creditCardNumber) => {
    const tamano = creditCardNumber.length;
    if(tamano > 4){
      let ultimosCuatro = creditCardNumber.slice(-4);
      let cadena = "#"
      let numerosmask = cadena.repeat(tamano - 4)
      return numerosmask + ultimosCuatro;
    }else{
      return creditCardNumber;
    }
  },
}

export default validator;
