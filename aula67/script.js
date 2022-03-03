let nome = 'Pedro';
function falaNome() {
    console.log(nome);
}

function fala(nome){
    
    let nome = 'Ygor'; //variável qeu não vai ser atribuida a função
    falaNome(nome);
}
fala();