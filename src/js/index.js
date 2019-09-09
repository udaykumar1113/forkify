import Search from './models/Search';
import Recipe from './models/Recipe';
import {elements, renderLoader, clearLoader} from './view/base';
import * as searchView from './view/searchView'; 
import * as recipeView from './view/recipeView';

/**Global state of the app
 * Search object
 * Current recipie of object
 * Shopping list object
 * Liked recipies
 */

 const state = {};

 const controlSearch = async () => {
   // 1) Get query from view
   const query = searchView.getInput();

   if (query) {
       // 2) New search object and add to state
       state.search = new Search(query);

       // 3) Prepare UI for results
       searchView.clearInput();
       searchView.clearResults();
       renderLoader(elements.searchRes);

       try {
           // 4) Search for recipes
           await state.search.getResults();
   
           // 5) Render results on UI
           clearLoader();
           searchView.renderResults(state.search.result);
       } catch (err) {
           alert('Something wrong with the search...');
           clearLoader();
       }
   }
}

elements.searchForm.addEventListener('submit', e => {
   e.preventDefault();
   controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
   const btn = e.target.closest('.btn-inline');
   if (btn) {
       const goToPage = parseInt(btn.dataset.goto, 10);
       searchView.clearResults();
       searchView.renderResults(state.search.result, goToPage);
   }
});

/*
*Recipe controller
*/

const controlRecipe = async () =>{
    const id = window.location.hash.replace('#','');
    console.log(id);
    if(id){
        //prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //create recipe object 
        state.recipe = new Recipe(id);
        //try{
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            //calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            //render recipe
            console.log(state.recipe);
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        //}
        //catch(error){
        //    alert('something went wrong');
        //} 

    }
};

//window.addEventListener('hashchange',controlRecipe);

['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));
