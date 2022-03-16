// Delete apaga e deixa o espaço no array
const nomes = ['Joao', 'Pedro', 'Maria'];
console.log(nomes); 
delete nomes[1];
console.log(nomes);
console.log();

// array.pop() - remove o último elemento e retorna o elemento removido
const frutas = ['Banana', 'Goiaba', 'Manga'];
console.log(frutas);
let removeUltimo = frutas.pop();
console.log(frutas, "Elemento Removido: " + removeUltimo); //Vai aparacer os elementos restantes do array e o elemento removido
console.log();

// array.shift() - remove o primeiro elemento e retorna o elemento removido
const verduras = ['Pimentão', 'Cheiro Verde', 'Ceboula'];
console.log(verduras);
let removePrimeiro = verduras.shift();
console.log(verduras, "Elemento Removido: " + removePrimeiro);
console.log();

//array.push() - adiciona o elemento no final do array
console.log(frutas); //Array criado na linha 9
frutas.push('Limão');
console.log(frutas);
console.log();

//array.unshift() - adiciona o elemento no começo do array
console.log(frutas);
frutas.unshift('Melancia');
console.log(frutas);
console.log();

// array.slice() - fatia um pedaço da matriz em uma nova matriz
console.log(frutas);
const fatia = frutas.slice(1,3); //Sempre o número que termina é um a mais
console.log(fatia);