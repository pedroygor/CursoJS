//Função Recursiva

let teste = function contagemRegressiva(contador) {
    let proximoNumero = contador - 1;
    console.log(contador);
    
    if(proximoNumero > 0) {
        contagemRegressiva(proximoNumero);
    }
}

teste(5); 


