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
var cpfRegExp = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
var celularRegExp = /\d{10,12}/;
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
var testNome = nome.value.length === 0 || celularRegExp.test(celular.value);
var testData = data.value.length === 0 || nomeRegExp.test(nome.value);
var testEmail = email.value.length === 0 || dataRegExp.test(data.value);
var testCelular = celular.value.length === 0 || emailRegExp.test(email.value);

cpf.className = testCpf ? "valid" : "invalid";
data.className = testCpf ? "valid" : "invalid";
email.className = testCpf ? "valid" : "invalid";
celular.className = testCpf ? "valid" : "invalid";
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
addEvent(form, "submit", function () {
var testCpf = cpf.value.length === 0 || cpfRegExp.test(cpf.value);
var testNome = nome.value.length === 0 || nomeRegExp.test(nome.value);
var testEmail = email.value.length === 0 || nomeRegExp.test(nome.value);
var testCelular = celular.value.length === 0 || celularRegExp.test(celular.value);
var testData = data.value.length === 0 || dataRegExp.test(data.value);

if (!testCpf) {
  cpf.className = "invalid";
  errorCpf.innerHTML = "CPF inválido";
  errorCpf.className = "errorCPF active";
  console.log('cpf')
} else {
  cpf.className = "valid";
  errorCpf.innerHTML = "";
  errorCpf.className = "errorCPF";
}

if (!testNome) {
  nome.className = "invalid";
  errorNome.innerHTML = "Nome inválido";
  errorNome.className = "errorNome active";
  console.log('nome')
} else {
  nome.className = "valid";
  errorNome.innerHTML = "";
  errorNome.className = "errorNome";
}

if (!testEmail) {
  nome.className = "invalid";
  errorNome.innerHTML = "Nome inválido";
  errorNome.className = "errorNome active";
  console.log('email')
} else {
  nome.className = "valid";
  errorNome.innerHTML = "";
  errorNome.className = "errorNome";
}

if (!testCelular) {
  celular.className = "invalid";
  errorCelular.innerHTML = "Celular inválido";
  errorCelular.className = "errorCelular active";
  console.log('celular')
} else {
  celular.className = "valid";
  errorCelular.innerHTML = "";
  errorCelular.className = "errorCelular";
}

if (!testData) {
  data.className = "invalid";
  errorData.innerHTML = "Data inválida";
  errorData.className = "errorData active";
  console.log('data')
} else {
  data.className = "valid";
  errorData.innerHTML = "";
  errorData.className = "errorData";
}

return false;
});
