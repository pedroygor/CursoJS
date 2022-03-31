var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function filterByID(obj) {
  if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 4

//Segundo Exemplo
const idade = [15, 25, 38, 22, 42, 10, 15, 2, 4, 11];
function maior10(arr) {
  return arr > 10;
}
const resultado = idade.filter(maior10);
console.log(resultado);

// Terceiro Exemplo
//Retornar um array com os nomes das pessoas que tem mais que 5 letras 
//Pessoas com mais de 50 anos
//Pessoas que terminam com a letra 'a'
const pessoas = [
{nome: 'Pedro', idade: 25},
{nome: 'Albertina', idade: 49},
{nome: 'Leiliane', idade: 68},
{nome: 'Otávio', idade: 18},
{nome: 'Ana', idade: 14}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCiquentaAnos = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminamComLetraA = pessoas.filter(obj => obj.nome.slice(-1) === 'a');
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCiquentaAnos);
console.log(pessoasTerminamComLetraA);

