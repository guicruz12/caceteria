
//mudar as imagens na pagina index
function mudarImagem() {
    document.getElementById('promocao1').src = 'imagens/brisafe_promo_2.png';
}

function voltarImagem() {
    document.getElementById('promocao1').src = 'imagens/promoçao.png';
}
//mudar as imagens na pagina index


//barra de pesquisa
function realizarPesquisa() {
    // Obter o valor da barra de pesquisa
    var termoPesquisa = document.getElementById("searchInput").value;

    // Simular uma pesquisa (aqui você pode implementar a lógica real de pesquisa)
    var resultadoPesquisa = "Resultado da pesquisa para: " + termoPesquisa;

    // Exibir o resultado da pesquisa
    document.getElementById("resultadoPesquisa").innerHTML = resultadoPesquisa;
}
//barra pesquisa





