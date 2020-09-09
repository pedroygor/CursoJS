const data = new Date();
const h1 = document.querySelector('.container h1');
const opcoes = {
    dateStyle: "full",
    timeStyle: 'short'
};
const options = {
    hour: '2-digit',
    minute: '2-digit'
};
//h1.innerHTML = (data.toLocaleDateString('pt-BR', opcoes) + ' ' 
//+ data.toLocaleTimeString('pt-BR', options));

h1.innerHTML = (data.toLocaleString('pt-BR', opcoes));