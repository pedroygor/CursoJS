const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener("click", function (e) {
    e.preventDefault();
    function mostraHora(cont) {
        let data = new Date();
        data.setHours(0, 0, 0, cont);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false
        });

    }

    let cont = 1000;
    setInterval(function () {
        relogio.innerHTML =  mostraHora(cont);
        cont += 1000;
    }, 1000);




});
