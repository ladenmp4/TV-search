import { printer } from "./creator.js";
import { API_URL } from "./constants.js";


const tv_form = document.querySelector('#tv-form');
tv_form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const address = document.querySelector('input[name=q]').value;
    const fullAddress = API_URL + address;
    
    try{
        const response = await fetch(fullAddress);
        const data = await response.json();

        const dataLenght = Object.keys(data).length
        
        dataCollector(data, dataLenght);
    }catch(error){
        console.log(error)
    }
})

function clearResults(resultContainer){
    /* Clear the innerHTML */
    resultContainer.innerHTML = '';
}

async function dataCollector(data, dataLenght){
    /* Create the container and fill it with the shows info */
    const resultContainer = document.getElementById('results');
    clearResults(resultContainer);
    

    for(let i = 0; i < dataLenght; i++){
        const show_info = data[i];
        printer(resultContainer, show_info)
    }
}
