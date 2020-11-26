const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');


function upmovies(data) {
    if (data.poster_path) {  
    sec1.innerHTML += `<div class="subsec" > 
    <img id = "${data.id}" src="https://image.tmdb.org/t/p/w500${data.poster_path}" >  
    <p>${data.original_title}</p>
    </div>`
    }    
    }
    



function showup() {
    fetchup().then((data)=>{
        data.results.forEach( result => {
            console.log(result);
           
            upmovies(result);
        });
    })  

}

showup();

// 



function topmovies(data) {
    if (data.poster_path) {  
    sec2.innerHTML += `<div class="subsec" > 
    <img id = "${data.id}" src="https://image.tmdb.org/t/p/w500${data.poster_path}" >  
    <p>${data.original_title}</p>
    </div>`
    }    
    }
    



function showtop() {
    fetchtop().then((data)=>{
        data.results.forEach( result => {
            console.log(result);
           
            topmovies(result);
        });
    })  

}

showtop();