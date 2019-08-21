import Search from './models/Search';

/**Global state of the app
 * Search object
 * Current recipie of object
 * Shopping list object
 * Liked recipies
 */

 const state = {};

 const controlSearch = async () => {

    //1. Get uery from view
    const query = 'pizza';

    if(query){
        //2. New search object and add to state
        state.search = new Search(query);

        //3. prepare UI for results

        //4. Search for recipies
        await state.search.getResults();

        //5. Render results on UI
        console.log(state.search.result);
    }
 }

 document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
 }) 
