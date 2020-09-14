function mostraHora(cont) {
    let data = new Date ();
    data.setHours(0,0,0, cont);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

let cont = 1000;
setInterval(function() {
   console.log(mostraHora(cont));
   cont += 1000;
}, 1000);

//setTimeout(() => {
//    clearInterval(timer)
//}, 5000);
//
//setTimeout(() => {
//    console.log('Fala Família');
//}, 5000);