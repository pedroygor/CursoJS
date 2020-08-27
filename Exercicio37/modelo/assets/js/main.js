function meuEscopo(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    
    
    function receberEventoForm(evento){
        evento.preventDefault();
        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);
        const imc = (peso / (altura*altura)).toFixed(2);
        if(!peso){
            resultado.innerHTML = `<p class= 'aviso'>Peso Invalido</p>`;
            return;
        }
        if(!altura){
            resultado.innerHTML = `<p class= 'aviso'>Altura Invalido</p>`;
            return;
        }

        if(imc < 18.5){
            resultado.innerHTML = `<p>IMC: ${imc}, Abaixo do peso</p>`;
            
        }    
        else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `<p>IMC: ${imc}, Peso Normal</p>`;
           
        }
        else if(imc >= 24.9 && imc <= 29.9){
            resultado.innerHTML = `<p>IMC: ${imc}, Sobrepeso</p>`;
            
        }
        else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `<p>IMC: ${imc}, Obesidade grau 1</p>`;
            
        }
        else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `<p>IMC: ${imc}, Obesidade grau 2</p>`;
            
        }
        else{
            resultado.innerHTML = `<p>IMC: ${imc}, Obesidade grau 3</p>`;
            
        }
        
    }
    form.addEventListener('submit', receberEventoForm);
    
}
meuEscopo();