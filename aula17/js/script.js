function pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
pessoa.nome = 'Pedro';
console.log(pessoa.nome);
//document.body.innerHTML = `<p> Nome: ${pessoa.nome} </p> </br>`;