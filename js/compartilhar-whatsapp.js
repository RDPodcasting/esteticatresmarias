function whatsApp(Nome,Numero,Dia,Servico)
{
    var url;
    var texto="Sou #NOME#, meu número é o #NUMERO# e, quero agendar um horário no dia #DIA# para fazer #SERVICO#, vim do site esteticatresmarias.com.br e aguardo uma confirmação com valor e formas de pagamento que vocês aceitam!";
    texto=texto.replace('#NOME#',Nome);
    texto=texto.replace('#NUMERO#',Numero);
    texto=texto.replace('#DIA#',Dia);
    texto=texto.replace('#SERVICO#',Servico);
    //    var telefone="5511974316721";
    // 
    var telefone="5511949389623";
    if($.isMobile)
    {
        url="whatsapp://send?phone="+telefone+"&text="+texto
    }
    else
    {
        url="https://api.whatsapp.com/send?phone="+telefone+"&text="+texto
    }
    console.log("Enviando msg: "+texto);
    $.post( url, $('form#myForm').serialize(), function(data) {
         // ... do something with response from server
         console.log(data);

       },
       'json' // I expect a JSON response
    );
}

$('#agendar').click( function() {
    
    var Nome = $('#Nome').val();
    var Numero = $('#Whatsapp').val();
    var Dia = $('#DtAgenda').val();
    var Servico = $("#TipoServicos option:selected").text();

    whatsApp(Nome,Numero,Dia,Servico)
    

});