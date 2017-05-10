function mascaraData( campo, e )
{
    var kC = (document.all) ? event.keyCode : e.keyCode;
    var data = campo.value;

    if( kC!=8 && kC!=46 )
    {
        if( data.length==2 )
        {
            campo.value = data += '/';
        }
        else if( data.length==5 )
        {
            campo.value = data += '/';
        }
        else
            campo.value = data;
    }
}

function mascaraCelular( campo, e )
{
    var kC = (document.all) ? event.keyCode : e.keyCode;
    var data = campo.value;

    if( kC!=8 && kC!=46 )
    {
        if( data.length==0 )
        {
            campo.value = data += '(';
        }
        else if( data.length==3 )
        {
            campo.value = data += ')';
        }
        else
            campo.value = data;
    }
}

var form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    var valorMascara =  document.getElementById('celular')
    //document.getElementById("saida").value = valorMascara.value.replace("(","").replace(")","");
    console.log(valorMascara.value.replace("(","").replace(")",""))
})
