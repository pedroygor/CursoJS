const data = new Date();

function getDayOfWeek(data) {
    const diaSemana = data.getDay();
    let diaDaSemanaTexto;
    switch (diaSemana) {
        case 0:
            return diaDaSemanaTexto = 'Domingo';
        case 1:
            return diaDaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaDaSemanaTexto = 'Terça-feira';
        case 3:
            return diaDaSemanaTexto = 'Quarta-feira';
        case 4:
            return diaDaSemanaTexto = 'Quinta-feira';
        case 5:
            return diaDaSemanaTexto = 'Sexta-feira';
        case 6:
            return diaDaSemanaTexto = 'Sábado';
        default:
            return diaDaSemanaTexto = '';
    }
}
function getMonthOfYear(data) {
    const month = data.getMonth();
    let numberOfMonth;
    switch (month) {
        case 0:
            return numberOfMonth = 'Janeiro';
        case 1:
            return numberOfMonth = 'Fevereiro';
        case 2:
            return numberOfMonth = 'Março';
        case 3:
            return numberOfMonth = 'Abril';
        case 4:
            return numberOfMonth = 'Maio';
        case 5:
            return numberOfMonth = 'Junho';
        case 6:
            return numberOfMonth = 'Julho';
        case 7:
            return numberOfMonth = 'Agosto';
        case 8:
            return numberOfMonth = 'Setembro';
        case 9:
            return numberOfMonth = 'Outubro';
        case 10:
            return numberOfMonth = 'Novembro';
        case 11:
            return numberOfMonth = 'Dezembro';
        default:
            return numberOfMonth = '';
    }
}
function zeraAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function setResultado(data) {
    const dia = data.getDate();
    const semana = getDayOfWeek(data);
    const mes = getMonthOfYear(data);
    const ano = data.getFullYear();
    const hora= zeraAEsquerda(data.getHours());
    const min = zeraAEsquerda(data.getMinutes());

     const texto = `${semana}, ${dia} de ${mes} de ${ano} </br> ${hora}:${min}`;
     return texto;
} 
const resultado = document.querySelector('#texto');
const texto = setResultado(data);
resultado.innerHTML = texto;