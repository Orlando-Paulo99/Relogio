setInterval(() =>
    document.getElementById('temp').textContent=new Date().toLocaleDateString("br")
,1000);


function time(){
    hoje=new Date();
    hora=hoje.getHours();
    minuto=hoje.getMinutes();
    segundo=hoje.getSeconds();
    document.getElementById('hours').textContent=hora+":"+minuto+":"+segundo;
    setTimeout(time(),500);
}