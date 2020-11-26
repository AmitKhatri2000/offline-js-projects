const toadd = document.querySelector('.toadd');
const addedlist = document.querySelector('.addedlist');
const tosearch = document.querySelector('.tosearch'); 


toadd.addEventListener('submit', (e)=>{
 e.preventDefault();
  const addlist = toadd.addlist.value.trim();
 toadd.reset();
 if (addlist) {
    addedlist.innerHTML +=`<li>
    <p>${addlist}</p>
    <img  class= "icon" src="https://img.icons8.com/material-outlined/24/000000/delete-forever.png"/>
   </li>`;
 }
})

addedlist.addEventListener('click' , (e)=>{
 if (e.target.getAttribute('class') === "icon")  {
     e.target.parentElement.remove();
     } 
 });

tosearch.addEventListener('submit' , (e)=>{
    e.preventDefault();
  
});

 tosearch.addEventListener('keyup' , ()=>{
  const search = tosearch.searchlist.value.trim();
  if (search) {
    Array.from(addedlist.children)
  .filter((todo)=>{
  
      return ! todo.textContent.includes(search);
     
  }).forEach((todos) =>{
      todos.classList.add('tohide');
  })
  }
  Array.from(addedlist.children)
  .filter((todo)=>{
      return  todo.textContent.includes(search);
  }).forEach((todos) =>{
      todos.classList.remove('tohide');
  })
 
 })
