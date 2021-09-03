tempoPipoca = 10;
tempoMacarrao = 8;
tempoBrigadeiro = 8;
tempoCarne = 15;
tempoFeijao = 12;

function microondas(prato,segundos) {
    let msg
    switch (prato) {
        case 'Pipoca':
            if (segundos < tempoPipoca) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= tempoPipoca*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= tempoPipoca*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Macarrão':
            if (segundos < tempoMacarrao;) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= tempoMacarrao*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= tempoMacarrao*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Brigadeiro':
            if (segundos < tempoBrigadeiro;) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= tempoBrigadeiro*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= tempoBrigadeiro*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Carne':
            if (segundos < tempoCarne) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= tempoCarne*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= tempoCarne*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Feijão':
            if (segundos < tempoFeijao) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= tempoFeijao*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= tempoFeijao*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;  
        default:
            msg = 'Prato inexistente';
            break;
    }
    return msg
}

console.log('Pipoca,8 - ' + microondas('Pipoca',8));
console.log('Pipoca,10 - ' + microondas('Pipoca',10));
console.log('Pipoca,15 - ' + microondas('Pipoca',15));
console.log('Pipoca,25 - ' + microondas('Pipoca',25));
console.log('Pipoca,40 - ' + microondas('Pipoca',40));
console.log('Camarão,40 - ' + microondas('Camarão',40));
console.log('Pipoca,20 - ' + microondas('Pipoca',20));
console.log('Macarrão,8 - '+ microondas('Macarrão',8));
console.log('Macarrão,17 - '+ microondas('Macarrão',17));
console.log('Macarrão,5 - '+ microondas('Macarrão',5));
console.log('Macarrão,50 - '+ microondas('Macarrão',50));
console.log('Carne,40 - '+ microondas('Carne',40));
console.log('Carne,30 - '+ microondas('Carne',30));
console.log('Carne,17 - '+ microondas('Carne',17));
console.log('Carne,4 - '+ microondas('Carne',4));
console.log('Feijão,30 - '+ microondas('Feijão',30));
console.log('Brigadeiro,10 - '+ microondas('Brigadeiro',10));
console.log('Feijão,17 - '+ microondas('Feijão',17));
console.log('Feijão,50 - '+ microondas('Feijão',50));
console.log('Brigadeiro,7 - '+ microondas('Brigadeiro',7));
console.log('Brigadeiro,16 - '+ microondas('Brigadeiro',16));
console.log('Brigadeiro,25 - '+ microondas('Brigadeiro',25));