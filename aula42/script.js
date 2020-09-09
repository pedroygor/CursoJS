//Switch/Case
const data = new Date('1996-05-08 05:00:00');
const diaSemana = data.getDay();
function getDayOfWeek(diaSemana) {
    let diaDaSemanaTexto;
    switch (diaSemana) {
        case 0:
            return diaDaSemanaTexto = 'Hoje é Domingo';
        case 1:
            return diaDaSemanaTexto = 'Hoje é Segunda-feira';
        case 2:
            return diaDaSemanaTexto = 'Hoje é Terça-feira';
        case 3:
            return diaDaSemanaTexto = 'Hoje é Quarta-feira';
        case 4:
            return diaDaSemanaTexto = 'Hoje é Quinta-feira';
        case 5:
            return diaDaSemanaTexto = 'Hoje é Sexta-feira';
        case 6:
            return diaDaSemanaTexto = 'Hoje é Sábado';
        default:
            return diaDaSemanaTexto = '';
    }
}

const teste = getDayOfWeek(diaSemana);
console.log(teste);