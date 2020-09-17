function falaOi(comeco) {
    function falaMundo(resto) {
        return comeco + ' ' + resto;
    }
    return falaMundo;
}
const fala = falaOi('Oie'); //Aqui eu recebo o parâmetro da primeira função
const ola = fala('mundiça') // Aqui eu recebo o argumento da função que está dentro da função falaOi()
console.log(ola);