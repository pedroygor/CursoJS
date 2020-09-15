function relogio() {
    const relogio = document.querySelector('.relogio');
    const estilo = document.getElementById('myDiv');

    let cont = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(() => {
            relogio.innerHTML = mostraHora(cont);
            cont += 1000;
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            estilo.style.color = 'black';
            iniciaRelogio();
        }
        if (elemento.classList.contains('parar')) {
            e.preventDefault();
            cont = cont;
            estilo.style.color = 'red';
            //relogio.innerHTML = mostraHora(cont);
            clearInterval(timer);
        }
        if (elemento.classList.contains('zerar')) {
            e.preventDefault();
            cont = 0;
            clearInterval(timer);
            estilo.style.color = 'black';
            //clearInterval(timer2);
            relogio.innerHTML = `00:00:00`;
        }
    });

    function mostraHora(cont) {
        let data = new Date();
        data.setHours(0, 0, 0, cont);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    }
}
relogio();