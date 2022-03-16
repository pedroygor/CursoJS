// Funções Geradoras 
function * teste () {
    yield 10;
    yield 20;
    yield 30;
}
const gen = teste(); // Instancia a função, O NOME DA VARIAVEL NÃO PODE SER IGUAL AO NOME DA FUNÇÃO 
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Segundo Exemplo
var array = ['a', 'b', 'c'];
function* generator(arr) {
  let i = 0;
  while (i < arr.length) {
    yield arr[i++]
  }
}
  
const it = generator(array);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Terceiro Exemplo

const arr = ['a', 'b', 'c'];
  
function* generator() {
  yield 1;
  yield* arr; //Asteriscos (YELD*) retorna todos os valores da variável ou objeto
  yield 2;
}
for (let value of generator()) {
    console.log(value);
}   
//Quarto Exemplo 

let locais = ["Banabuiú", "Quixadá", "Quixeramobim"];

function* geradora () {
    yield "Iguatu";
    yield* locais;
    yield "Mombaça";
}

for (const iterator of geradora()) {
    console.log(iterator);
}

//Quinto Exemplo
//Chamando uma Geradora em outra Geradora
function * primeiraGeradora () {
    yield "a";
    yield "b";
    yield "c";
}

function * segundaGeradora () {
    yield "1";
    yield* primeiraGeradora();
    yield "2";
}

for (const i of segundaGeradora() ) {
    console.log(i);
}

//Exemplo 7

function * geradora1 () {
    yield () => console.log("Valor 1");
    yield () => console.log("Valor 2");
}

const g1 = geradora1();
const f1 = g1.next().value;
const f2 = g1.next().value;

f1();
f2();
