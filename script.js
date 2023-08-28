//chamando a classe da date 
setInterval(() =>
    document.getElementById('temp').textContent=new Date().toLocaleDateString("br")
,1000);

//guardando as variaves dos ids 
const hr=document.getElementById('hours')
const min=document.getElementById('minutos')
const seg=document.getElementById('segundos')

const relogio= setInterval(function time(){
    //chamando a classe dos tempos  
    let datToday=new Date();
    let hours=datToday.getHours();
    let minutos=datToday.getMinutes();
    let segundos=datToday.getSeconds();

    //logica para se o tempo  for menor que  10 acrescentar o zero da frente
    if(hours<10)hours='0'+hours;
    
    if(minutos<10)minutos='0'+minutos;

    if(segundos<10)segundos='0'+segundos;

    //mudando os valores de acordo com o tempo real 
    hr.textContent=hours;
    min.textContent=minutos;
    seg.textContent=segundos;

})


