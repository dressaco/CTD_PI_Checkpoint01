function microondas(tempo,padrao) {
    if (tempo < padrao) {
        msg = 'Tempo insuficiente.';
    } else if (tempo >= padrao*3) {
        msg = 'Kabumm!!';
    } else if (tempo >= padrao*2) {
        msg = 'A comida queimou!';
    } else {
        msg = 'Prato pronto, bom apetite!!!'
    }
    return msg
}

function pipoca(tempo) {
    padrao = 10;
    microondas(tempo,padrao)
    return msg
}

console.log(pipoca(10))