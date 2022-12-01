function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla'); //lista teclas

//     |contador           |condição|                 |incrementação|
for (let contador = 0; contador < ListaDeTeclas.length; contador ++) {
    const TeclaAtual = ListaDeTeclas[contador];
    const instrumento = TeclaAtual.classList[1];
    const Audio = `#som_${instrumento}`; // template string

    TeclaAtual.onclick = function () { //função anonima para não executar sem interação
        tocaSom(Audio);
    }

    TeclaAtual.onkeydown = function (evento) {// quando a tecla ta apertada
        if (evento.code === 'Space' || /*or*/ evento.code === 'Enter') { // o comparador mais seguro é ===
            TeclaAtual.classList.add('ativa'); // adicionar class na lista
        }
    }

    TeclaAtual.onkeyup = function () { // teclada desapertada
        TeclaAtual.classList.remove('ativa'); // remover class da lista
    }
}
