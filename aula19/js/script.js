function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    function gente (nome, sobrenome,altura, peso){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.altura = altura,
        this.peso = peso
    }
    
    function receberEventoForm(evento) {
        evento.preventDefault();
        let person = new gente( 
            gente.nome = form.querySelector('.nome').value,
            gente.sobrenome = form.querySelector('.sobrenome').value,
            gente.altura = form.querySelector('.altura').value,
            gente.peso = form.querySelector('.peso').value
        );
       
        pessoas.push(person);
        console.log(pessoas);
        resultado.innerHTML += `<p>Nome: ${person.nome}, Sobrenome: ${person.sobrenome}, 
        Altura:${person.altura}, Peso: ${person.peso}. </p>`;
        
    }
    form.addEventListener('submit', receberEventoForm);
}
meuEscopo();