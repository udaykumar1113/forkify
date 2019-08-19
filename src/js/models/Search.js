import axios from 'axios';

export default class Search{
    
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const apiKey = '05ee40ea6c1e7cb0a693efcd161a264f';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try{
            this.result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`);
            const recipes = this.result.data.recipes;
            console.log(recipes);
        }
        catch(error){
            console.log(error);
        }
    }
}
