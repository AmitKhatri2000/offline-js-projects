const form = document.querySelector('form');
const username = document.querySelector('.username');
const email  = document.querySelector('.email');
const phoneNumber = document.querySelector('.phone-number')
const password = document.querySelector('.password'); 
const passwordCheck = document.querySelector('.password-check');
const maincont = document.querySelector('.maincont');
const pf = document.querySelector('.p1');
const ps = document.querySelector('.p2');
const pt = document.querySelector('.p3');
const pfo = document.querySelector('.p4');
const pfi = document.querySelector('.p5');
const divs = document.querySelectorAll('.divs');
var count = 45; 


form.addEventListener('submit' , (e)=>{
e.preventDefault();    

validation();

});

function validation() {
 count = 45;   
 const usernameval =   username.value.trim();
 const emailval =   email.value.trim();
 const phoneNumberval =  phoneNumber.value.trim();
 const passwordval =    password.value.trim();
 const passwordCheckval =  passwordCheck.value.trim();
 maincont.style.height = "45rem";
usernamefun(usernameval );
emailfun(emailval);
phoneNumberfun(phoneNumberval);
passwordfun(passwordval);
passwordCheckfun(passwordCheckval , passwordval);
checkall();

}

function checkall() {
    var pass = 0;
   divs.forEach( div => {
      
       if (div.classList.contains('pass')) {
        pass = pass + 1;
       }

   });

if (pass == 5) {
   const div = document.querySelector('.success');
   const span = div.querySelector('.span');
   span.innerHTML = username.value.trim();
   div.className = "success" ;
   const butt = div.querySelector('.ok');
   butt.addEventListener('click' , ()=>{
    div.className = "success hide" ;

   });
}

}

function usernamefun(name) {

const div  = username.parentElement;


if (name == "") {
    count ++;
    maincont.style.height = `${count}rem`;
   pf.innerHTML = "username can't be blank";
   div.className = "divs err";

} 

else if(name.length < 4){
pf.innerHTML = "username should consist of atleast 4 letters";
count ++;
maincont.style.height = `${count}rem`;
div.className = "divs err";

}

else{

    pf.innerHTML = "";
    div.className = "divs pass";


}

}


function emailfun(emailval) {

    const div  = email.parentElement;
    if (emailval == "") {
        ps.innerHTML = "email can't be blank";
        count ++;
        maincont.style.height = `${count}rem`;
        div.className = "divs err";
    }  
    
    else{

        ps.innerHTML = "";
        div.className = "divs pass";
    }
    
    
    }

function phoneNumberfun(number) {

    const div  = phoneNumber.parentElement;
if (number == "") {
    pt.innerHTML = "phone number can't be blank";
    count ++;
    maincont.style.height = `${count}rem`;
    div.className = "divs err";
}    

else if(number.length < 10){
    pt.innerHTML = "number should consist of  10  numbers";
    count ++;
    maincont.style.height = `${count}rem`;
    div.className = "divs err";
    }
    
    else if (number.length == 10){
    
        pt.innerHTML = "";
        div.className = "divs pass";
        
    
    }


}


function passwordfun(pass) {

    const div  = password.parentElement;
if (pass == "") {
    pfo.innerHTML = "password can't be blank";
    count ++;
    maincont.style.height = `${count}rem`;
    div.className = "divs err";
}    


else if(pass.length < 6){
pfo.innerHTML = "pasword should consist of atleast 6 letters";
count ++;
maincont.style.height = `${count}rem`;
div.className = "divs err";

}

else{
    div.className = "divs pass";
    pfo.innerHTML = ""

}


}


function passwordCheckfun(repass , pass ) {

    const div  = passwordCheck.parentElement;
if (repass == "") {
    pfi.innerHTML = "password recheck can't be blank";
    count ++;
    maincont.style.height = `${count}rem`;
    div.className = "divs err";
}    

else if(repass !== pass){
    pfi.innerHTML = "password is not matching";
    count ++;
    maincont.style.height = `${count}rem`;
    div.className = "divs err";

}

else{

    pfi.innerHTML = ""
    div.className = "divs pass";
}


}
