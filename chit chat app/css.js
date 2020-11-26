const icon = document.querySelector('.icondiv');
const ul = document.querySelector('.chatroomul');
const topicon = document.querySelector('.topicon');
const update = document.querySelector('.update')


icon.addEventListener('click' , ()=>{
ul.classList.toggle('active');
icon.classList.toggle('active');

 
})

topicon.addEventListener('click' , ()=>{
update.classList.toggle('upactive');

})

