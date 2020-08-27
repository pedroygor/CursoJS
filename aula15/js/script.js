const numero = Number(prompt(`Digite um número: `));
const numeroTitulo = document.getElementById('numero-titulo');
const nada = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
nada.innerHTML = ' ';
nada.innerHTML += `<p>Raiz Quadrada é ${Math.sqrt(numero)}</p>`;
nada.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
nada.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<p>`;
nada.innerHTML += `<p>Arredondando pra baixo>: ${Math.floor(numero)}</p>`;
nada.innerHTML += `<p>Arredondando pra baixo>: ${Math.ceil(numero)}</p>`;
nada.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;