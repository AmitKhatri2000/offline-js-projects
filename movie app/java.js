const search = document.querySelector('.search');
const sec = document.querySelector('.sec');
const video = document.querySelector('.video');
const videodiv = document.querySelector('.videodiv');
const close = document.querySelector('.close');
const h3 = document.querySelector('.h3');


function showimg(data) {
if (data.poster_path) {  
if (data.original_language === "en") {
    sec.innerHTML += `<div class="subsec" > 
<img id = "${data.id}" src="https://image.tmdb.org/t/p/w500${data.poster_path}" >  
<p>${data.original_title}</p>
</div>`
h3.style.display = "block";
}    

}    
}

function showvideo(data) {

    videodiv.innerHTML += `<div><iframe src="https://www.youtube.com/embed/${data.key}"></iframe> </div>`;
      
 
}





function videos() {
sec.addEventListener('click' , (e)=>{
if (e.target.tagName === "IMG") {
        
       video.classList.add("active");   
       close.addEventListener('click' , ()=>{
       video.classList.remove('active')  ;
   })    
    videodiv.innerHTML = "";
   const id = e.target.getAttribute('id');
   fetchvideo(id).then((data)=>{
       data.results.forEach( result => {
        console.log(result);
         showvideo(result);
         
       });

})

}
    
})  

}

videos();

search.addEventListener('submit' , (e)=>{
e.preventDefault();
const name = search.search.value.trim();
if (name) {
sec.innerHTML = "";
fetchapi(name).then((data)=>{
    data.results.forEach( result => {
        console.log(result);
       
        showimg(result);
    });
   
    
    
})  
    
}
search.reset();
})
