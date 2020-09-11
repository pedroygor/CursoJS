const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (const iterator of p) {
    iterator.style.backgroundColor = backgroundColorBody;
    iterator.style.color = 'white';
}