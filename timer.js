
function getTimeFromSecond(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}


const timer = document.querySelector('.timer1');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.iniciar-pausar');
const zerar = document.querySelector('.iniciar-zerar');
let segundos = 0;
let relogio;

function iniciaRelogio(){
    relogio = setInterval(function() {
        segundos++
        timer.innerHTML = getTimeFromSecond(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    clearInterval(relogio)
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
      clearInterval(relogio);
});

zerar.addEventListener('click', function (event){ 
    clearInterval(relogio)
    timer.innerHTML = '00:00:00';
})