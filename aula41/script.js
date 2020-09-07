/*
const data = new Date('2020-09-07 3:40:16'); // a, m , d, h, minuto, s, ms
console.log('Dia', data.getDate());
console.log('Mês',data.getMonth() + 1); // Mês começa do Zero
console.log('Ano',data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundos',data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString()); */
function zeraAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function formataData(data) {
    const dia = zeraAEsquerda(data.getDate());
    const mes = zeraAEsquerda(data.getMonth() + 1);
    const ano = zeraAEsquerda(data.getFullYear());
    const hora= zeraAEsquerda(data.getHours());
    const min = zeraAEsquerda(data.getMinutes());
    const seg = zeraAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;  
}
const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);