var form  = document.getElementsByTagName('form')[0];
var cpf = document.getElementById('cpf');
var celular = document.getElementById('celular');
var nome = document.getElementById('nome');
var data = document.getElementById('data');
var email = document.getElementById('email');
var errorCpf = cpf;
var errorCelular = celular;
var errorNome = nome;
var errorData = data;
var errorEmail = email;
while ((errorCpf = errorCpf.nextSibling).nodeType != 1);
while ((errorNome = errorNome.nextSibling).nodeType != 1);
while ((errorData = errorData.nextSibling).nodeType != 1);
while ((errorEmail = errorEmail.nextSibling).nodeType != 1);
while ((errorCelular = errorCelular.nextSibling).nodeType != 1);
var cpfRegExp = /\d{11}/;
var celularRegExp = /\(\d{2,3}\)\d{8,9}/;
var nomeRegExp = /[a-zA-ZáéíóúàâêôãõüçÁÉÍÓÚÀÂÊÔÃÕÜÇ]{3,}\s{1,}[a-zA-ZáéíóúàâêôãõüçÁÉÍÓÚÀÂÊÔÃÕÜÇ\s]{1,}/;
var dataRegExp = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
var testNome = nome.value.length === 0 || nomeRegExp.test(celular.value);
var testData = data.value.length === 0 || dataRegExp.test(nome.value);
var testEmail = email.value.length === 0 || emailRegExp.test(data.value);
var testCelular = celular.value.length === 0 || celularRegExp.test(email.value);

cpf.className = testCpf ? "valid" : "invalid";
data.className = testData ? "valid" : "invalid";
email.className = testEmail ? "valid" : "invalid";
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
addEvent(cpf, "keyup", function () {
var test = celular.value.length === 0 || celularRegExp.test(celular.value);
if (test) {
  celular.className = "valid";
  celular.innerHTML = "";
  celular.className = "errorCelular";
} else {
  celular.className = "invalid";
}
});
addEvent(nome, "keyup", function () {
var test = nome.value.length === 0 || nomeRegExp.test(nome.value);
if (test) {
  nome.className = "valid";
  nome.innerHTML = "";
  nome.className = "errorNome";
} else {
  nome.className = "invalid";
}
});
addEvent(email, "keyup", function () {
var test = email.value.length === 0 || emailRegExp.test(email.value);
if (test) {
  email.className = "valid";
  email.innerHTML = "";
  email.className = "errorEmail";
} else {
  email.className = "invalid";
}
});
addEvent(data, "keyup", function () {
var test = data.value.length === 0 || dataRegExp.test(data.value);
if (test) {
  data.className = "valid";
  data.innerHTML = "";
  data.className = "errorData";
} else {
  data.className = "invalid";
}
});
addEvent(form, "submit", function (e) {
var testCpf = cpf.value.length === 0 || cpfRegExp.test(cpf.value);
var testNome = nome.value.length === 0 || nomeRegExp.test(nome.value);
var testEmail = email.value.length === 0 || nomeRegExp.test(nome.value);
var testCelular = celular.value.length === 0 || celularRegExp.test(celular.value);
var testData = data.value.length === 0 || dataRegExp.test(data.value);

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

if (!testNome) {
  nome.className = "invalid";
  errorNome.innerHTML = "Nome inválido";
  errorNome.className = "errorNome active";
  e.preventDefault();
  console.log('nome')
} else {
  nome.className = "valid";
  errorNome.className = "errorNome";
}

if (!testEmail) {
  email.className = "invalid";
  errorEmail.innerHTML = "Email inválido";
  errorEmail.className = "errorEmail active";
  e.preventDefault();
  console.log('email')
} else {
  email.className = "valid";
  errorEmail.className = "errorEmail";
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

if (!testData) {
  data.className = "invalid";
  errorData.innerHTML = "Data inválida";
  errorData.className = "errorData active";
  e.preventDefault();
  console.log('data')
} else {
  data.className = "valid";
  errorData.className = "errorData";
}

if (testData && testCelular && testEmail && testCpf && testNome){
  celular.value = celular.value.replace("(","").replace(")","")
  data.value = data.value.replace("/","").replace("/","")
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
