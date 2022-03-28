let num = 6;
let multiplicador = num * num;
let aux = '';
for(let i = 0; i < multiplicador; i++) {
    if((i%num) != 0 && i !== 0) aux+='*';
    else {
        console.log(aux);
        aux = '';
    }   
}
