const add = document.querySelector('.add');




add.addEventListener('click', ()=>{
addnote();

});

function addnote() {
    const newnote = document.createElement('div');
    newnote.classList.add('mains');
    
    newnote.innerHTML = `
  
    <div class="main">    
    <p class="p" >notes</p>
    <button class="edit">e</button>    
    <button class="delete">d</button>    
    <div class="submain"> 
    <div class="interdiv"><p class="para"></p></div>     
    <textarea class="textarea hidden" >
    </textarea>
    </div>
    </div>  `;

    
const note =  newnote.querySelector('.main');
const edit =  newnote.querySelector(".edit");
const  dell = newnote.querySelector('.delete');
const textarea = newnote.querySelector('.textarea');
const para = newnote.querySelector('.para');



edit.addEventListener('click' , ()=>{
  textarea.classList.toggle('hidden');
});

dell.addEventListener('click' , ()=>{
note.remove();

});

textarea.addEventListener('input' , (e)=>{
const value = e.target.value;
para.textContent = `${value}`;

});
  
 
    document.body.appendChild(newnote);
      
    

}


   
// function updatels() {
//   const alltextarea = document.querySelectorAll('.textarea');
//   const alltext =[];
//      alltextarea.forEach( text => {
//         alltext.push(text.value);
//      });
    
//   localStorage.setItem('alltext' , JSON.stringify(alltext));
    
// } 