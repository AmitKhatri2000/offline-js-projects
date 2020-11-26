const startbut = document.querySelector('.start');
const nextbut = document.querySelector('.next');
const gamediv = document.querySelector('.gamediv');
const startdiv = document.querySelector('.startdiv');
const guessbut = document.querySelector('.guess');
const imput = document.querySelector('.answer');
const nextdiv = document.querySelector('.nextdiv');
const sp2 = document.querySelector('.sp2');
const dword = document.querySelector('.dword');
var ran ;
 var worngword = ["aavj", "yonpth", "riaapjvstc" , "sprach"];
 var rightans  = ["java", "python", "javascript" , "csharp"];



startbut.addEventListener('click' ,()=>{
startdiv.classList.add('hide');
gamediv.classList.remove('hide');
ran =  Math.floor(Math.random()*4);
dword.innerHTML = `{ ${worngword[ran]} }`  ;

});

      
nextbut.addEventListener('click' , ()=>{
   nextdiv.classList.add('hide');
   gamediv.classList.remove('hide');
   ran = Math.floor(Math.random()*4);
   dword.innerHTML = `{ ${worngword[ran]} }` ;
   
   });



   
guessbut.addEventListener('click' , ()=>{
var userans  = imput.value.trim();

checkans(userans);
imput.value = "";
}) ; 


function checkans(ans) {
if (ans) {
   
   if (ans == rightans[ran]) {

    
      nextdiv.classList.remove('hide');
      gamediv.classList.add('hide');
    




   }

   else {
      sp2.textContent = "sorry your answer is incorrect ! try agian" ;
sp2.style.display = "block";
  setTimeout(() => {
   sp2.style.display = "none";
  }, 3000);   

   }


}


else{
    
   sp2.textContent = "don't try to act smart cause i am the only one " ;
    sp2.style.display = "block";
    setTimeout(() => {
     sp2.style.display = "none";
    }, 3000);   
  
     }
 


}