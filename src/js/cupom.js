(function(c,els){
  window.onload=function(){
    els.forEach(function(e,it){
      var i = document.createElement("iframe");
      i.src = ["https://uolet.com/widget/v2/#c=", JSON.stringify(c[it])].join("");
      i.setAttribute("style", "width:100%; height:100%;border: none;");
      if(document.querySelector(e)) document.querySelector(e).appendChild(i);
    })
  }
})([{widget_id : "58e78b92429a390001c0cf2a"}],["#cupom"]);

document.addEventListener('DOMContentLoaded', function() {

  $('#resend').on('click', function(ev) {
    ev.preventDefault()
    var mac = $('#client_mac').val()
    $.getJSON('/resend?mac='+mac, function(data, status) {
      if (data.code == 'ok')
        alert('Codigo de acesso reenviado com sucesso.')
      else
        alert(data.value)
    })
  })

})
