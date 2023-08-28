//chamando a classe da date 
setInterval(() =>
    document.getElementById('temp').textContent=new Date().toLocaleDateString("br")
,1000);

//rciando a função do tempo do relogio 
const hr=document.getElementById('hours')
const min=document.getElementById('minutos')
const seg=document.getElementById('segundos')

const relogio= setInterval(function time(){

    let datToday=new Date();
    let hours=datToday.getHours();
    let minutos=datToday.getMinutes();
    let segundos=datToday.getSeconds();

    hr.textContent=hours;
    min.textContent=minutos;
    seg.textContent=segundos;

})


