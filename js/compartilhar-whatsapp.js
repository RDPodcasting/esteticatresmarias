function whatsApp(Nome,Numero,Dia,Servico)
{
    var endereco;
    var texto="Sou #NOME#, meu número é o #NUMERO# e, quero agendar um horário no dia #DIA# para fazer #SERVICO#, vim do site esteticatresmarias.com.br e aguardo uma confirmação com valor e formas de pagamento que vocês aceitam!";
    texto=texto.replace('#NOME#',Nome);
    texto=texto.replace('#NUMERO#',Numero);
    texto=texto.replace('#DIA#',Dia);
    texto=texto.replace('#SERVICO#',Servico);
    var telefone="5511974316721";
    if($.isMobile)
    {
        endereco="whatsapp://send?phone="+telefone+"&text="+texto
    }
    else
    {
        endereco="https://api.whatsapp.com/send?phone="+telefone+"&text="+texto
    }
    console.log("Enviando msg para: "+endereco);
    
    window.open(endereco);
}

$('#agendar').click( function() {
    
    var Nome = $('#Nome').val();
    var Numero = $('#Whatsapp').val();
    var Dia = $('#DtAgenda').val();
    var Servico = $("#TipoServicos option:selected").text();

    whatsApp(Nome,Numero,Dia,Servico)
    

});