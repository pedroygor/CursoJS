const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
const resultado = document.querySelector('.container');
const div = document.createElement('div');

elementos.forEach(element => {
    let {tag, texto} = element;
    let criarTag = document.createElement(tag);
    let criarTexto = document.createTextNode(texto);
    criarTag.appendChild(criarTexto);
    div.appendChild(criarTag);
});
resultado.appendChild(div);
//elementos.forEach(elementos => {
//    resultado.innerHTML += `<${elementos.tag}> ${elementos.texto} </${elementos.tag}>`;
//}); 
