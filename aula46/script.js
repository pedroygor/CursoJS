//Desustruturação de Objetos
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Ygor',
    idade: 24,
    endereco: {
        rua: 'Da humildade',
        numero: 17
    }
}
const { nome, sobrenome, endereco} = pessoa;
console.log(endereco);

//For Clássico
const frutas = ['Pêra', 'Uva', 'Maçã', 'Manga']
for (let i=0; i < frutas.length; i++) {
    console.log(`${frutas[i]}`);
}