const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso Inválido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura Inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    console.log(imc);
});
function criaP () {
    const p =  document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 
    'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
}