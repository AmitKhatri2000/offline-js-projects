const cityname = document.querySelector('.cityname');
const maindiv = document.querySelector('.main');
const maincont = document.querySelector('.maincont');
const w = new weather();

function updateui(data) {
maindiv.classList.remove('wrong');    
citydata = data.citydata;
weatherdata = data.weatherdata;
const time = weatherdata.IsDayTime ? "day.svg" : "night.svg" ;
maindiv.innerHTML= `<div class="backimg">

 <img  class="img" src="${time}" >
 </div>
 <div class="info">
  <div class="icons">
  <img class="icon" src="icons/${weatherdata.WeatherIcon}.svg" >   
  </div>    
 <h3>${citydata.EnglishName}</h3>
 <p>${weatherdata.WeatherText}</p>
 <span>${weatherdata.Temperature.Metric.Value}</span>
 <span>&degc</span>
 </div> `;
 maincont.style.marginTop = "10px";

 maindiv.style.display = "block";
    
};

cityname.addEventListener('submit' , (e)=>{
e.preventDefault();    
const city = cityname.citysearch.value.trim() ;
cityname.reset();
w.apicall(city).then((data)=>{
updateui(data);
}).catch(()=>{
    if (city) {
        maindiv.innerHTML = " sorry weather forecast not available , try something else....... "
        maindiv.classList.add('wrong');

    }
})


})
