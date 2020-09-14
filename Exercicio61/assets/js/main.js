const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
const estilo = document.getElementById('myDiv');


let cont = 0;
let timer;
let timer2;
function iniciaRelogio() {
    timer = setInterval(() => {
        relogio.innerHTML = mostraHora(cont);
        cont += 1000;
    }, 1000);
}
iniciar.addEventListener("click", function (e) {
    e.preventDefault();
    clearInterval(timer);
    iniciaRelogio();
    estilo.style.color = 'black';
});

parar.addEventListener("click", function (e) {
    e.preventDefault();
    cont = cont;
    setTimeout(() => {
        estilo.style.color = 'red';
        //relogio.innerHTML = mostraHora(cont);
        clearInterval(timer);
    }, 1000);

});

zerar.addEventListener("click", function (e) {
    e.preventDefault();
    cont = 0;
    setTimeout(() => {
        estilo.style.color = 'black';
        clearInterval(timer);
        //clearInterval(timer2);
        relogio.innerHTML = `00:00:00`;
    }, 1000);
});

function mostraHora(cont) {
    let data = new Date();
    data.setHours(0, 0, 0, cont);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}