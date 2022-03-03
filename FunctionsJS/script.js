function add(a, b) { //Função soma
    return a + b;
}

let sum = add;

function average(a, b, fn) { //Função de média
    return fn(a, b) / 2;
}

let result = average(10, 20, sum); // Parâmetros, ressaltando que um dos paramentros é uma função

console.log(result);