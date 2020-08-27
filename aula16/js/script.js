let times = ['Timão', 'Porco', 'Tricolor', 'Ceará', 'Interde Limeira'];
let funcoes = document.getElementById('func');

times.push('Fortaleza'); //Adcionando Elemento no final
//times.unshift('Bahia'); //Adicionando Elemento no começo
//let remove = times.pop(); //Remove di final
//let tira = times.shift(); //Remove do começo

function mostra()  {
   for (let index = 0; index < times.length; index++) {
      funcoes.innerHTML += `<p>${times[index]}</p>`;
    }
}
mostra();