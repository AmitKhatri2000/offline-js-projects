class weather{
  constructor(){
   this.key = 'X6pgvFwFYzgAIxl8QhKvFINXbAjb4Iue';
   this.weatherbase = 'http://dataservice.accuweather.com/currentconditions/v1/';
   this.citybase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
    apicall = async (city) => {
    const citydata = await this.getCity(city) ;
    const  weatherdata = await this.getWeather(citydata.Key);
    
    return { citydata ,  weatherdata };
  }

  getWeather = async (id) => {

    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherbase + query);
    const data = await response.json();
    return data[0];
  
  };

  getCity = async (city) => {
  
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.citybase + query);
    const data = await response.json();
    return data[0];
  
  };

}





