const nome = 'Pedro';
const sobrenome = 'Ygor';
const idade = 24;
const peso = 60;
const altura = 1.83;
let indiceMassaCorporea;
let anoNascimento;

indiceMassaCorporea = peso/(altura * altura);
anoNascimento = 2020 - idade;

console.log(`O IMC é: ${indiceMassaCorporea} Ano de Nascimento: ${anoNascimento}`);
console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e peso ${peso} kg`); 


