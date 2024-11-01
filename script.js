let hr=document.getElementById('hour');
let min=document.getElementById('minute');
let sec=document.getElementById('second');

function displaytime(){
    let date=new Date();

    let hh=date.getHours();
    let ss=date.getSeconds();
    let mm=date.getMinutes();

    let hrotation = 30*hh + mm/2;
    let srotation = 6*ss;
    let mrotation = 6*mm;

    hr.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}
setInterval(displaytime,1000);