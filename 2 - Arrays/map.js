let numeros = [2, 4, 6, 7, 12, 16];

//o quadrados de todos os números do array
function numeroAoQuadrado(num) {
    return num * num;
}
console.log(numeros.map(numeroAoQuadrado));

// juntar atributos de objetos
// retorne um elementos com o nome de cada pessoa
// remova apenas a chave nome do objeto
// adicione uma chave id para cada objeto
const pessoas = [
{firstName: "Pedro", age: 26},
{firstName: "Thiago", age: 29},
{firstName: "Celina", age: 59},
{firstName: "Letícia", age: 28},
{firstName: "Rosana", age: 21},
{firstName: "Eduarda", age: 15},
];

const nome = pessoas.map(obj => obj.firstName);
const idade = pessoas.map(obj => ({idade: obj.age}));

// console.log(nome);
console.log(idade);