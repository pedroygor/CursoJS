const nome = 'Pedro';
function falaNome() {
    console.log(nome);
}

function fala(){
    
    const nome = 'Ygor'; //variável qeu não vai ser atribuida a função
    falaNome();
}
fala();