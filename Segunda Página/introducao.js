function GirandoCarta(event) {
    event.preventDefault();
    var divPai = event.currentTarget.closest('.content-car').querySelector('.cars-img');
    var transformacaoAtual = divPai.style.transform;
    var estaGirando = transformacaoAtual.includes('rotateY(180deg)');

  
    if (estaGirando) {
        divPai.style.transform = '';
        divPai.style.transition = '1s';
        event.currentTarget.innerHTML = 'Mostrar detalhes';
        event.currentTarget.style.transform = 'rotateY(0deg)'
    } else {
        divPai.style.transform = 'rotateY(180deg)';
        divPai.style.transition = '1s';
        event.currentTarget.innerHTML = 'Mostrar menos';
    }

}



/* Função para quando os botões forem clicados */
function MudandoImg(event) {
    var botaoClicado = event.target;
    var pegandoImg = botaoClicado.closest('.content-car').querySelector('.cars-img');
    var idDoBotao = botaoClicado.getAttribute('data-id');

    if (idDoBotao == '1') {
        pegandoImg.src = "../Imagens/Carros/KWID.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="2"]');
        outroBotao.style.backgroundColor = '';
    } else if (idDoBotao == '2') {
        pegandoImg.src = "../Imagens/Carros/MOBI.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="1"]');
        outroBotao.style.backgroundColor = 'transparent';
    }

    if(idDoBotao == '3') {
        pegandoImg.src = "../Imagens/Carros/Terceira div/KACR.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="4"]');
        outroBotao.style.backgroundColor = 'transparent';
    } 
    else if(idDoBotao == '4'){
        pegandoImg.src = "../Imagens/Carros/Terceira div/SANX.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="3"]');
        outroBotao.style.backgroundColor = 'transparent';
    }


    if(idDoBotao == '5') {
        pegandoImg.src = "../Imagens/Carros/Segunda linha/Segunda Div/HB2C.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="6"]');
        outroBotao.style.backgroundColor = 'transparent';
    } 
    else if(idDoBotao == '6'){
        pegandoImg.src = "../Imagens/Carros/Segunda linha/Segunda Div/ONIT.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="5"]');
        outroBotao.style.backgroundColor = 'transparent';
    }

    if(idDoBotao == '7') {
        pegandoImg.src = "../Imagens/Carros/Segunda linha/Ultima div/POLO.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="8"]');
        outroBotao.style.backgroundColor = 'transparent';
    } 
    else if(idDoBotao == '8'){
        pegandoImg.src = "../Imagens/Carros/Segunda linha/Ultima div/SAND.png";
        event.currentTarget.style.backgroundColor = 'rgb(120, 222, 31)'

        var outroBotao = botaoClicado.closest('.content-button-list').querySelector('[data-id="7"]');
        outroBotao.style.backgroundColor = 'transparent';
    }

}




/* Função para quando a página for iniciada */
document.addEventListener("DOMContentLoaded", function () {
        /* Primeira imagem - primeira div */
        pri1 = document.getElementById('pri-imagem1');

        imagemSec = ["../Imagens/Carros/KWID.png","../Imagens/Carros/MOBI.png"];
        tempo = 4000; //4 segundos;

        setInterval(function () {
            var currentSrc = pri1.getAttribute('src');
    
            if (currentSrc.includes(imagemSec[0])) {
                pri1.src = imagemSec[1];
            } else {
                pri1.src = imagemSec[0];
            }
        }, tempo);

        /* Terceira imagem - primeira div */
        pri3 = document.getElementById('pri-imagem3');
        imagemSec3 = ["../Imagens/Carros/Terceira div/KACR.png","../Imagens/Carros/Terceira div/SANX.png"]

        setInterval(function () {
            var currentSrc1 = pri3.getAttribute('src');
    
            if (currentSrc1.includes(imagemSec3[0])) {
                pri3.src = imagemSec3[1];
            } else {
                pri3.src = imagemSec3[0];
            }
        }, tempo);



        /* Segunda imagem - segunda div */
        sec2 = document.getElementById('sec-imagem2');
        imagemSecfil2 = ["../Imagens/Carros/Segunda linha/Segunda Div/HB2C.png","../Imagens/Carros/Segunda linha/Segunda Div/ONIT.png"]

        setInterval(function () {
            var currentSrc2 = sec2.getAttribute('src');
    
            if (currentSrc2.includes(imagemSecfil2[0])) {
                sec2.src = imagemSecfil2[1];
            } else {
                sec2.src = imagemSecfil2[0];
            }
        }, tempo);
        
        
        sec3 = document.getElementById('sec-imagem3');
        imagemSecfil3 = ["../Imagens/Carros/Segunda linha/Ultima div/POLO.png","../Imagens/Carros/Segunda linha/Ultima div/SAND.png"]
    
        setInterval(function () {
            var currentSr3 = sec3.getAttribute('src');
    
            if (currentSr3.includes(imagemSecfil3[0])) {
                sec3.src = imagemSecfil3[1];
            } else {
                sec3.src = imagemSecfil3[0];
            }
        }, tempo);
    });
    
