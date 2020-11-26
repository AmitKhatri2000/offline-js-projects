const mainbut = document.querySelector('.music');
const songdiv = document.querySelector('.song-img');
const songname = document.querySelector('.song-name');
const progress = document.querySelector('.progress');
const progressbar = document.querySelector('.progress-bar');
const audio = document.querySelector('audio');
const endtime = document.querySelector('.end-time');
const starttime = document.querySelector('.start-time');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
var count  = 0;
var audiocount = 1;
var stop;
var ctime;
var cctime;
var ttime;
var isplaying = false;

var arry = ["itachi uchiha" , "sasuke uchiha" , "work like hell"]


mainbut.addEventListener('click' , ()=>{
mainbut.classList.toggle('play');
songdiv.classList.toggle('rot');
mprogressfun();
musicfun();

});  

next.addEventListener('click' , ()=>{
 nextfun();

mprogressfun();
})

function nextfun() {
   
    songdiv.classList.add('rot');
    mainbut.classList.add('play');
    mprogressfun();
    if (audiocount < 3) {
        audiocount ++;
        songname.innerHTML = `${arry[(audiocount - 1)]}`;
        songdiv.innerHTML = `<img  src="china_${audiocount}.jpg" alt="">`
        audio.src = `audio_${audiocount}.mp3` ;
        playfun();
        count = 0;
    }
    else if(audiocount == 3){
        audiocount = 1;
        songname.innerHTML = `${arry[(audiocount - 1)]}`;
        audio.src = `audio_${audiocount}.mp3` ;
        songdiv.innerHTML = `<img  src="china_${audiocount}.jpg" alt="">`
        playfun();
        count = 0;

    }
}


pre.addEventListener('click' , ()=>{
    mprogressfun();
    songdiv.classList.add('rot');
    mainbut.classList.add('play');
prefun();
})


progressbar.addEventListener('click' , (e)=>{
count = (e.offsetX / e.srcElement.clientWidth ) * 100 ;
cctime = (e.offsetX / e.srcElement.clientWidth ) * ttime ;

});




function prefun() {
    if (audiocount > 1) {
        audiocount --;
        songname.innerHTML = `${arry[(audiocount - 1)]}`;
        songdiv.innerHTML = `<img  src="china_${audiocount}.jpg" alt="">`
        audio.src = `audio_${audiocount}.mp3` ;
        playfun();
        count =  0;
    }
    else if(audiocount == 1){
        audiocount = 3;
        songname.innerHTML = `${arry[(audiocount - 1)]}`;
        songdiv.innerHTML = `<img  src="china_${audiocount}.jpg" alt="">`
        audio.src = `audio_${audiocount}.mp3` ;
        playfun();
        count =  0;

    }
}




function timeupdate() {
       

    audio.addEventListener('timeupdate',(e)=>{
       
        if (cctime) {
            e.srcElement.currentTime = cctime;
            cctime = 0;
        }
         ctime = e.srcElement.currentTime;
         ttime = e.srcElement.duration; 
         smin = Math.floor(ctime/60);
         ssec = Math.floor(ctime % 60);
    
       emin = Math.floor(ttime/60);
       esec = Math.floor(ttime % 60);
    if (ssec < 10) {
        starttime.innerHTML = `${smin}:0${ssec}`;
    }
    else{
        starttime.innerHTML = `${smin}:${ssec}`;
    }
    
if (ttime) {
    
    if (esec < 10) {
        endtime.innerHTML = `${emin}:0${esec}`;
    }
    else{
        endtime.innerHTML = `${emin}:${esec}`;
    }

}
    else {
        
    }
    
       
    })
    
}






function musicfun() {
if (isplaying == true) {

pausefun();

}
else{

playfun();

}

}



function pausefun() {
    audio.pause();
    isplaying = false;
}


function playfun() {
isplaying = true;    
audio.play();    
timeupdate();

}



function progressfun() {
 stop = setInterval(() => {
 count = count + (100/ttime) ;

 progress.style.width = `${count}%`;
 if (count >= 100) {
    clearInterval(stop);  
    songdiv.classList.remove('rot');
    mainbut.classList.remove('play');
    nextfun();
 }
  
}, 1000); 
 



}
function mprogressfun() {
    
    clearInterval(stop);  
    if (mainbut.classList.contains('play')) {
    if (count >= 100) {
        progressfun();
       
    count = 0 ;
    }    
    else{
    progressfun();
    count = count;
    }
    }

}
