const chatsul = document.querySelector('.chatsul');
const chatsdiv = document.querySelector('.chats');
const fform = document.querySelector('.firstform');
const sform = document.querySelector('.secform');
const chatroomul = document.querySelector('.chatroomul');


class sms{
constructor(username , room){
this.username = username ;
this.room   =  room ; 
this.coll = fire.collection('chatroom');
this.unsub;
};
async addchat(message){
const now = new Date();    
var putchat = {
username : this.username,
message :  message ,
room : this.room ,
time_at : firebase.firestore.Timestamp.fromDate(now)
}
this.coll.add(putchat).then(()=>{
    console.log("chatadded");
}).catch(()=>{
    console.log("error");
  })
 };

async getchat(){
this.unsub =  this.coll
.where('room' , '==' , this.room)
.orderBy('time_at')
.onSnapshot((e)=>{
e.docChanges().forEach( change => {
  if (change.type === "added") {
     const data = change.doc;
      chatui(data);
     
  }   
   
});
});
};
 async updatename(name){
   this.username = name; 
   localStorage.setItem('username' , name) 
 }

async clear(){
chatsdiv.style.display = "none" ;    
chatsul.innerHTML = "";
 
};

 async updateroom(room){
     this.room = room;
     if (this.unsub) {
        this.unsub();
       this.getchat(); 
     }  
 };
}

const name = localStorage.username ? localStorage.username : "anonymos";
  
const chats = new sms( name , "general");



function chatui(data) {
const  when = dateFns.distanceInWordsToNow(
    data.data().time_at.toDate()
) ;
chatsul.innerHTML += ` <li id = "${data.id}">
 <h3> ${data.data().username} : </h3>  <p> ${data.data().message} </p>
<span class = "sspan"> ${when} ago</span> 
 </li> ` 
chatsdiv.style.display = "block" ;
} 



chats.getchat();


fform.addEventListener('submit' , (e)=>{
e.preventDefault();
const message = fform.message.value.trim();
chats.addchat(message);
fform.reset();
});

sform.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const name = sform.name.value.trim();
    chats.updatename(name);
    sform.reset();
    
    });

    chatroomul.addEventListener('click' , (e)=>{
     if ( e.target.tagName === "LI") {
      chats.clear();
      const room = e.target.textContent;
      chats.updateroom(room);
     
         
    }
    });
