function microondas(prato,segundos) {
    let msg
    switch (prato) {
        case 'Pipoca':
            if (segundos < 10) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= 10*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= 10*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Macarrão':
        case 'Brigadeiro':
            if (segundos < 8) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= 8*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= 8*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Carne':
            if (segundos < 15) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= 15*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= 15*2) {
                msg = 'A comida queimou!';
            } else {
                msg = 'Prato pronto, bom apetite!!!'
            }
            break;
        case 'Feijão':
            if (segundos < 12) {
                msg = 'Tempo insuficiente.';
            } else if (segundos >= 12*3) {
                msg = 'Kabumm!!';
            } else if (segundos >= 12*2) {
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