
function printer(resultContainer, show_info){
    /* Creates all the innerHTML and fills them with shows info */
    const article = document.createElement('article');
        
        const showName = document.createElement('h2');
        showName.textContent = show_info.name;

        const showLink = document.createElement('a');
        showLink.innerHTML = `More details about <a href="${show_info.url}" target="_blank">${show_info.name}</a>`;

        const showChannel = document.createElement('span');
        showChannel.innerHTML = show_info.webChannelUrl;

        const showRatingBox = document.createElement('div');
        showRatingBox.classList.add('rating');

        const showRatingText = document.createElement('p');
        showRatingText.textContent = 'Rating:';

        showRatingBox.appendChild(showRatingText);

        showRatingStar(show_info, showRatingBox);

        const showImage = document.createElement('img');
        showImage.src = show_info.image;
        showImage.alt = show_info.name;

        const showSummary = document.createElement('div');
        const tempdiv = document.createElement('div');
        tempdiv.innerHTML = show_info.summary;
        showSummary.textContent = tempdiv.textContent || tempdiv.innerText;

        const showInformation = document.createElement('div');
        showInformation.classList.add('informationBox');

        const nameLink = document.createElement('div');
        nameLink.classList.add('nameLink');

        const imageSummary = document.createElement('div');
        imageSummary.classList.add('imageSummary');
        
        nameLink.appendChild(showName);
        nameLink.appendChild(showLink);
        nameLink.appendChild(showChannel);
        nameLink.appendChild(showRatingBox);
        /* Add all the small "Information" to nameLink div, (show ratings for example) */

        showInformation.appendChild(showSummary);
        /* Add all the show "Information" to showInformation div */

        imageSummary.appendChild(showImage);
        imageSummary.appendChild(showInformation);

        article.appendChild(nameLink);
        article.appendChild(imageSummary);

        resultContainer.appendChild(article);
}

function showRatingStar (show_info, showRatingBox){
    /* Set the stars to the nameLink div */
    if(show_info.rating == 'No rating'){
        const showRating = document.createElement('p');
        showRating.textContent = 'No rating';

        showRatingBox.appendChild(showRating);
        return;
    }
    const starBox = document.createElement('div');
    starBox.classList.add('starBox');

    for(let index = 0; index < show_info.rating; index++){
        const showRating = document.createElement('span');
        showRating.classList.add('star');
        showRating.setAttribute('data-value', 1);
        showRating.innerHTML = '&#9733;';

        starBox.appendChild(showRating);
    }
    showRatingBox.appendChild(starBox);
    return;
}
export { printer };
