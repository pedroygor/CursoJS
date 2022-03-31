//recebe um numero e faz o quadrado perfeito do número com asteriscos
function quadradoPerfeitoComAsteriscos(num){
    let aux = '';
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            aux+="*"
        }
        console.log(aux);
        aux = '';
    }
}

quadradoPerfeitoComAsteriscos(3);


//Palindromo
function ePalindromo(palavra) {
   let palindromo = palavra.split('').reverse().join('');
   return palindromo.toLowerCase() === palavra.toLowerCase();
}
console.log(ePalindromo('arara')); 

//Números Primos
function numerosPrimos(num) {
    let primos = [];
    let cont = 0;
    if(num === 2) {
        primos.push(2);
        return primos;
    }
    if(num === 3) {
        primos.push(2, 3);
        return primos;
    }
    else {
        primos.push(2, 3);
        for(let i = 4; i <= num; i++) {
            for(let j = 2; j <= Math.sqrt(i); j++) {
                if(i%j === 0) cont++;
            }
            if(cont === 0) primos.push(i);
            cont = 0;
        }
    }
    return primos;
}

console.log(numerosPrimos(33));


//quadrado perfeito

function quadradoPerfeito(num) {
    let aux = '';
    for(let i = 0; i < num; i++){
        for(j = 0; j < num; j++){
            aux+='*';
        }
        console.log(aux);
        aux = '';
    }
}
quadradoPerfeito(4);

//Números Primos
function quantosPrimos(num) {
    let cont = 0;
    let primos = [];

    if(num === 2)  return primos.push(2);
    else if(num === 3)  return primos.push(2, 3);
    else {
        for(let i = 4; i <= num; i++){
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i%j === 0) cont++;
            }
            if(cont === 0) primos.push(i);
            cont = 0;
        }
        return primos;
    }

}
console.log(quantosPrimos(45));

//palindromo

function palindromo (palavra) {
    let palindromo = palavra.split('').reverse().join('');

    return palavra.toLowerCase() === palindromo.toLowerCase();
}

console.log(palindromo('arara'));