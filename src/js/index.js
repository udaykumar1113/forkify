import axios from 'axios';

async function getResults(query){
    const apiKey = '05ee40ea6c1e7cb0a693efcd161a264f';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try{
        const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${query}`);
        const recipes = result.data.recipes;
        console.log(recipes);
    }
    catch(error){
        console.log(error);
    }
}

getResults('pizza');