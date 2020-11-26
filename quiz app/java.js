const correctanswer = ["B" ,"A" , "B"];
const form = document.querySelector(".quiz-form");
const result1 = document.querySelector(".result");
const fordis = document.querySelector(".score");

form.addEventListener("submit", e => {
e.preventDefault();
var score = 0;

const useranswer = [form.q1.value , form.q2.value , form.q3.value];


for (let i = 0; i < correctanswer.length; i++) {
    if ( useranswer[i] === correctanswer[i] ) {
        score += 33.3;
        
    }
    

};

scrollTo(0,0);
score = Math.round(score);

fordis.style.display = "block";


var output = 0;
const timer = setInterval(() => {
    result1.innerHTML= `${output}%`;
    if (output === score) {

        clearInterval(timer);

    }
    else{
        output++;
    }

}, 20); 





});


