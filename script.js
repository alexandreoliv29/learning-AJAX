var dados = new FormData()

dados.append('nome', 'Alexandre');
dados.append('idade', '21');
dados.append('endereco', 'guara');

$.ajax({
    url: 'http://localhost/meuscript.php',
    method: 'POST',
    data: dados,
    processData: false,
    contentType: false,
}).done(function(resposta){
    window.alert(resposta);
})