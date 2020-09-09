const data = new Date();

function getDayOfWeek(data) {
    const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 
        'Sexta-feira', 'Sábado'];
return semana[data.getDay()];
}
function getMonthOfYear(data) {
    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return month[data.getMonth()];
    
    
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
const resultado = document.querySelector('.container h1');
const texto = setResultado(data);
resultado.innerHTML = texto;