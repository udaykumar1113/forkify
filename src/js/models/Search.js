import axios from 'axios';

export default class Search{
    
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const apiKey = '05ee40ea6c1e7cb0a693efcd161a264f';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`);
            this.result =res.data.recipes;
            console.log(res);
            console.log(this.result);
        }
        catch(error){
            console.log(error);
        }
    }
}
