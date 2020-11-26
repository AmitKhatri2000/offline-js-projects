const nums = document.querySelectorAll('.nums');
const calop = document.querySelectorAll('.calop');
const topdis = document.querySelector('.topdis');
const enddis = document.querySelector('.bottomdis');
var numvalue = 0;
var opvalue;
var newnumvalue;
var preop;
var total = 0;
var nop;
nums.forEach( num => {
    num.addEventListener('click' ,()=>{
    if (numvalue == 0) {
    numvalue = num.innerHTML;
    }    
    else{
        numvalue += num.innerHTML;
    }
    
    enddis.innerHTML = numvalue;
    })
   
  
    enddis.innerHTML = numvalue;
  
});

calop.forEach( op => {
    op.addEventListener('click' ,()=>{
  opvalue = op.getAttribute('data-value') ; 
  if (numvalue  ===  0) {
if (opvalue == "=") {
    
}

else{

    noequal = opvalue;
    preop = noequal;

}
  }

  else{

  
  if (opvalue == "=") {
      math(noequal);
      topdis.innerHTML += `${numvalue}   ${noequal} ` ;
      numvalue = 0;
     
  }
  else{
    
        
   if (preop) {
    if (preop == opvalue) {
        
        noequal = opvalue;  
        math(noequal);
        topdis.innerHTML += `${numvalue}   ${opvalue} ` ;
            numvalue = 0;
            preop = noequal;

    }   

    else{

        noequal = opvalue;  
        math(preop);
        topdis.innerHTML += `${numvalue}   ${opvalue} ` ;
            numvalue = 0;
            preop = noequal;


    }
   


   }

   else{

    noequal = opvalue;  
    math(noequal);
    topdis.innerHTML += `${numvalue}   ${opvalue} ` ;
        numvalue = 0;
        preop = noequal;
    
   }

  }
  
  
  }
    })
  
      


});





function math( noequal ) {
    numvalue = parseInt(numvalue);
  if (total == 0) {
      total = numvalue;
  }
 else{

  
if (noequal == "+") {
   total  =  total + numvalue ;
   enddis.innerHTML = total;
   
}
else if (noequal == "-") {
  
    total  =  total -  numvalue ;
    enddis.innerHTML = total;
    
}
else if (noequal == "*") {
    
    total  =  total * numvalue ;
    enddis.innerHTML = total;
    
}
else if (noequal == "/") {
    total  =  total / numvalue ;
    enddis.innerHTML = total;
    
}
else if (noequal == "%") {
    total  = Math.floor((value/100)*numvalue) ;
     topdis.innerHTML = `${value}   ${noequal}   ${numvalue}` ;
   enddis.innerHTML = total;
   
    
}
 }

}