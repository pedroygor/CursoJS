let salario = 900;

salario = 1000;
console.log(salario);

//Funções Callback

    let salarioBruto = 1000;
    let salarioLiquido;

getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O Salário líquido é ${salarioLiquido}`);
});

function getSalario(salarioBruto, callback) {
    let liquido;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;

    const descontos = inss + vr + vt + fgts;
    
    liquido = salarioBruto - descontos;

    return callback(liquido);
}
    


