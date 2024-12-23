import { printer } from "./creator.js";
import { API_URL } from "./constants.js";
import { showInfo } from "./showInfo.js";


const tv_form = document.querySelector('#tv-form');
tv_form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const address = document.querySelector('input[name=q]').value;
    
    try{
        const response = await fetch(API_URL + address);
        const data = await response.json();
        
        dataCollector(data);
    }catch(error){
        console.log(error)
    }
})

function clearResults(resultContainer){
    /* Clear the innerHTML */
    resultContainer.innerHTML = '';
}

async function dataCollector(data){
    /* Create the container and fill it with the shows info */
    const resultContainer = document.getElementById('results');
    clearResults(resultContainer);

    for(let i = 0; i < data.length; i++){
        const show_info = showInfo(data, i);
        printer(resultContainer, show_info); 
    }
}
