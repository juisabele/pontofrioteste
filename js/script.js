'use strict';

window.onload = function onload(){
  var captive_api  = 'https://uc8jkdxoyd.execute-api.eu-west-1.amazonaws.com/development/';
  var search = window.location.search;
  /* verifica se existe uma url de login na querystring */
  var token_url = /\&?login_url=([\w\%\.\-]*)/i.test(search) ? decodeURIComponent(/\&login_url=([\w\%\.\-]*)/i.exec(search)[1]) : '';
  var client_mac = /\&?client_mac=([\w\%\.\-]*)/i.test(search) ? decodeURIComponent(/\&?client_mac=([\w\%\.\-]*)/i.exec(search)[1]) : null

  /* localiza todo os forms e hrefs e adiciona a querystring (removendo errors) aos seus apontamentos */
  var qs = window.location.search.replace(/(&?errors=[\w\%]*)/i,'');
  Array.prototype.slice.call(document.getElementsByTagName('a')).forEach(function(a){a.href += qs});
  (document.getElementsByTagName('form#login')||{}).action = [captive_api, 'login', qs].join('');
  (document.getElementsByTagName('form#cadastro')||{}).action = [captive_api, 'enroll', qs].join('');
  (document.getElementsByTagName('form#auth')||{}).action = [token_url, qs].join('');
  (document.getElementsByTagName('input#username')||{}).value = client_mac;


  /* exibe erros recebidos via querystring */
  var el = document.getElementById('erros');
  if(el){
    var errors =  [];
    var regex  = /errors=([\w\%]*)/gim;
    var match = regex.exec(window.location.search)
    while( match != null){
      errors.push(match[1])
      match = regex.exec(window.location.search)
    }
    if(errors && errors.length){
      var ul = document.createElement('ul');
      errors.forEach(function(e){
        var li = document.createElement('li');
        li.innerText = e;
        ul.appendChild(li);
      })
      el.appendChild(ul);
      el.setAttribute('style','display:block');
    }
  }
}
