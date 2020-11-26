
const key = "460a52423b629302166ee5a420a08517";
const basekey = "https://api.themoviedb.org/3/search/movie?api_key=460a52423b629302166ee5a420a08517&&query=";

async function fetchapi(name) {
var tosearch = `https://api.themoviedb.org/3/search/movie?api_key=460a52423b629302166ee5a420a08517&&query=${name}`    
const response = await fetch(tosearch);
const data = await response.json();
return data;
}


async function fetchvideo(id) {
var tovideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=460a52423b629302166ee5a420a08517`;    
const response = await fetch(tovideo);
const data = await response.json();
return data;    
}

async function fetchup() {
var tovideo = `https://api.themoviedb.org/3/movie/upcoming?api_key=460a52423b629302166ee5a420a08517`;    
const response = await fetch(tovideo);
const data = await response.json();
return data;    
}


async function fetchtop() {
    var tovideo = `https://api.themoviedb.org/3/movie/top_rated?api_key=460a52423b629302166ee5a420a08517`;    
    const response = await fetch(tovideo);
    const data = await response.json();
    return data;    
    }