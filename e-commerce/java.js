const umin  = document.querySelector('.u-min');
const umax  = document.querySelector('.u-max');
const uinput  = document.querySelector('.u-input');
const dmin  = document.querySelector('.d-min');
const dmax  = document.querySelector('.d-max');
const dinput  = document.querySelector('.d-input');
const uprice = document.querySelector('.u-price');
const dprice = document.querySelector('.d-price');
const pprice = document.querySelector('.pprice');
const sprice = document.querySelector('.sprice');
const tprice = document.querySelector('.tprice');
var ovalue = 0;
var svalue = 0;
var uvalue = 0;
var dvalue = 0;
var tvalue = 0;


umin.addEventListener('click' , ()=>{
if (uvalue > 0 ) {
    -- uvalue ;
    uinput.style.backgroundColor = "white";
}
uinput.value = uvalue;
cal(uvalue);

});

umax.addEventListener('click' , ()=>{
    if (uvalue < 5 ) {
       ++ uvalue ;
       uinput.style.backgroundColor = "white";
       if (uvalue == 5) {
        uinput.style.backgroundColor = "crimson";
        window.alert('max limit is 5 only ');
    }
   

    }
    uinput.value = uvalue;
    cal(uvalue);
    });

    
dmin.addEventListener('click' , ()=>{
    if (dvalue > 0 ) {
        -- dvalue ;
        dinput.style.backgroundColor = "white";
    }
    dinput.value = dvalue;
    cals(dvalue);
    });
    
    dmax.addEventListener('click' , ()=>{
        if (dvalue < 5 ) {
           ++ dvalue ;
           dinput.style.backgroundColor = "white";
           if (dvalue == 5) {
               dinput.style.backgroundColor = "crimson";
           }
          
        }
        dinput.value = dvalue;
        cals(dvalue);

        });
    


     function cal(value) {
      ovalue = (value*15);
      uprice.textContent = `$${ovalue}` ;   
     
      protol();
        
     }
     function cals(value) {
     svalue = (value*15);
    dprice.textContent = `$${svalue}` ;   
   
    protol();
     }


     function protol() {
        tvalue = ovalue + svalue; 
        pprice.textContent = `$${tvalue}` ;
        tol();
     }

     function tol() {
         if ( tvalue > 110) {
             sprice.textContent =  "$0";
             tprice.textContent = tvalue;
         }

         else{
            sprice.textContent =  "$5";
            tprice.textContent = `$${tvalue + 5}`;
            
         }
     }