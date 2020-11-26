const img = document.querySelector('.image');
const prebut = document.querySelector('.prebut');
const nextbut = document.querySelector('.nextbut');
const fa = document.querySelectorAll('.fa');
const ratediv = document.querySelector('.rate');
const body = document.querySelector('body');
var random ;



nextbut.addEventListener('click' , ()=>{
random = (Math.random()*300);   
img.innerHTML = `
<div class="clip">
    <h1>loading  </h1>
  </div>
<img src="https://picsum.photos/250/300?random = ${random} ">` ;

fa.forEach((e ) => {
  
     e.classList.remove('click');
   });
    

})

rat();
// my self made function for rating
function rat() {
   for (let i = 0; i < fa.length; i++) {
  
      fa[i].addEventListener('click' , ()=>{ 
       fa.forEach((e , a) => {
          if (a == 0 && i == 0) {
             
          }
          else{
            e.classList.remove('click');
          }
           
       
          
       });   
   
      
   
       for ( let dex = i  ; dex >= 0; dex--) {
          
         fa[dex].classList.toggle('click');
        
         
       }
      });
   
   }
}


hover();

function hover() {
   for (let i = 0; i < fa.length; i++) {
  
      fa[i].addEventListener('mouseover' , ()=>{ 
       fa.forEach((e , a) => {
          if (a == 0 && i == 0) {
             
          }
          else{
            e.classList.remove('hover');
          }
           
       
          
       });   
   
      
   
       for ( let dex = i  ; dex >= 0; dex--) {
          
         fa[dex].classList.toggle('hover');
        
         
       }
      });
   
   }
}


  


body.addEventListener('mouseover' , (e)=>{
if ( !( e.target.tagName === "I") ) {
   
   fa.forEach((e ) => {
   

        e.classList.remove('hover');
      

});


};

});   