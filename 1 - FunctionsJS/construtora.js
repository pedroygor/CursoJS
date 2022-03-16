function myFunction (a, b) {
    return arguments.length;
}
console.log(myFunction('abc', 'b'));

function multiplica (a, b) {
    return a * b;
}
console.log(multiplica.toString());

function somaTudo () {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(somaTudo(1, 4, 5));

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Pedro', 'Ygor');

function mudaNome(a, b) {
    a = 'novoNome';
    b = 'novoSobrenome'

    return a + ' ' + b;
}
mudaNome(pessoa1.nome, pessoa1.sobrenome);

console.log(pessoa1.nome + " " + pessoa1.sobrenome);

const people = [
    {name:"Pedro", age:17},
    {name:"David", age:18},
    {name:"André", age:15}
];

console.table(people);