import Search from './models/Search';
import {elements} from './view/base';
import * as searchView from './view/searchView'; 

/**Global state of the app
 * Search object
 * Current recipie of object
 * Shopping list object
 * Liked recipies
 */

 const state = {};

 const controlSearch = async () => {

    //1. Get uery from view
    const query = searchView.getInput();

    if(query){
        //2. New search object and add to state
        console.log(`Input is ${query}`);
        state.search = new Search(query);

        //3. prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4. Search for recipies
        await state.search.getResults();

        //5. Render results on UI
        searchView.renderResults(state.search.result);
    }
 }

 elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
 }) 
