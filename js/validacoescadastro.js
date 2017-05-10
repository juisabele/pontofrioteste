var form  = document.getElementsByTagName('form')[0];
var cpf = document.getElementById('cpf');
var celular = document.getElementById('celular');
var errorCpf = cpf;
var errorCelular = celular;
while ((errorCpf = errorCpf.nextSibling).nodeType != 1);
while ((errorCelular = errorCelular.nextSibling).nodeType != 1);
var cpfRegExp = /\d{11}/;
var celularRegExp = /\(\d{2,3}\)\d{8,9}/;
function addEvent(element, event, callback) {
var previousEventCallBack = element["on"+event];
element["on"+event] = function (e) {
  var output = callback(e);
  if (output === false) return false;

  if (typeof previousEventCallBack === 'function') {
    output = previousEventCallBack(e);
    if(output === false) return false;
  }
}
};

addEvent(window, "load", function () {
var testCpf = cpf.value.length === 0 || cpfRegExp.test(cpf.value);
var testCelular = celular.value.length === 0 || celularRegExp.test(celular.value);

cpf.className = testCpf ? "valid" : "invalid";
celular.className = testCelular ? "valid" : "invalid";
});
addEvent(cpf, "keyup", function () {
var test = cpf.value.length === 0 || cpfRegExp.test(cpf.value);
if (test) {
  cpf.className = "valid";
  cpf.innerHTML = "";
  cpf.className = "errorCPF";
} else {
  cpf.className = "invalid";
}
});
addEvent(celular, "keyup", function () {
var test = celular.value.length === 0 || celularRegExp.test(celular.value);
if (test) {
  celular.className = "valid";
  celular.innerHTML = "";
  celular.className = "errorCelular";
} else {
  celular.className = "invalid";
}
});
addEvent(form, "submit", function (e) {
var testCpf = cpf.value.length === 0 || cpfRegExp.test(cpf.value);
var testCelular = celular.value.length === 0 || celularRegExp.test(celular.value);

if (!testCpf) {
  cpf.className = "invalid";
  errorCpf.innerHTML = "CPF inválido";
  errorCpf.className = "errorCPF active";
  e.preventDefault();
  console.log('cpf')
} else {
  if (TestaCPF(cpf.value)){
    cpf.className = "valid";
    errorCpf.className = "errorCPF";
  }
  else {
    cpf.className = "invalid";
    errorCpf.innerHTML = "CPF inválido";
    errorCpf.className = "errorCPF active";
    e.preventDefault();
  };
}

if (!testCelular) {
  celular.className = "invalid";
  errorCelular.innerHTML = "Celular inválido";
  errorCelular.className = "errorCelular active";
  e.preventDefault();
  console.log('celular')
} else {
  celular.className = "valid";
  errorCelular.className = "errorCelular";
}

if (testCelular && testCpf){
  celular.value = celular.value.replace("(","").replace(")","")
}
});

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
