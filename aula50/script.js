//FOR IN
const frutas = ['Pêra', 'Uva', 'Maçã', 'Banana'];
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Ygor',
    idade: '24'
};

for (let key in pessoa) {
   console.log(key, pessoa[key]);
}
//FOR OF
const nome = 'Pedro Ygor';
const nome = 'Pedro Ygor';
for (const iterator of nome) {
    console.log(iterator);
}
