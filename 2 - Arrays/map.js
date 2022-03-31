let numeros = [2, 4, 6, 7, 12, 16];

//o quadrados de todos os números do array
function numeroAoQuadrado(num) {
    return num * num;
}
console.log(numeros.map(numeroAoQuadrado));

//juntar atributos de objetos
const nomes = [
{firstName: "Pedro", lastName: "Ygor"},
{firstName: "Thiago", lastName: "Sena"},
{firstName: "Celina", lastName: "Lopes"},
{firstName: "Letícia", lastName: "Silva"}
];

function getFullName(item) {
    return [item.firstName, item.lastName].join(" ");
}

console.log(nomes.map(getFullName));