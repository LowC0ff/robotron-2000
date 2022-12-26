/*
const robotron = document.getElementById('robotron');
robotron.onclick = ola;

function ola() {
  alert('ola, meu nome é robotron do jaça');
}
*/

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((element) => {
    element.addEventListener('click', (event) => {
       console.log(event);
    });
}
)

somar.addEventListener('click', () => {
    manipulaDados('somar');
})

subtrair.addEventListener('click', () => {
    manipulaDados('subtrair');
})


function manipulaDados(operacao) {
    if(operacao === 'subtrair') {
        braco.value = parseInt(braco.value) - 1;
    }
    else {
        braco.value = parseInt(braco.value) + 1;
    }
}