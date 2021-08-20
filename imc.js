    var calcular = document.querySelector('.calcular');


    function consoleInput(){
        var altura = document.querySelector('#altura').value;
        var peso = document.querySelector('#peso').value;
        var resultado = document.querySelector('.result');

        var imc = peso / (altura * altura)

        if(imc){
            resultado.textContent = imc.toFixed(2);
        }
    }


    calcular.addEventListener('click', consoleInput);



