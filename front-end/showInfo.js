
function showInfo(data, index){
    /* Creates show_info dictionary with all the shows info */
    const show_info = {
        "name": data[index]['show']['name'],
        "url": data[index]['show']['url'],
        "image": thumbnail(data, index),
        "webChannel": webChannel(data, index),
        "webChannelUrl": webChannelUrl(data, index),
        "summary": data[index]['show']['summary'],
        "rating": showRating(data,index)
        /* Add all the shows information in to this dict */
    }

    return show_info;
}

function thumbnail(data, index){
    /* Check if the medium sized thumbnail exists in the API */
    if(data[index]['show']['image'] == null || data[index]['show']['image']['medium'] == null){
        return 'assets/default_image.png';
    }

    return data[index]['show']['image']['medium'];
}

function webChannel(data, index){
    /* Check if the web channel is provided in the api */
    if(data[index]['show']['webChannel'] == null){
        return `No web channel provided`;
    } 

    return data[index]['show']['webChannel']['name'];
}

function webChannelUrl(data, index){
    /* If the web channel is provided create the innerHTML for ./creator.js */
    if(data[index]['show']['webChannel'] == null){
        return '<p> No web channel provided. </p>';
    }
    
    const webUrl = `https://www.tvmaze.com/webchannels/${data[index]['show']['webChannel']['id']}/${data[index]['show']['webChannel']['name']}`;
    return `Web channel: <a href = "${webUrl}" target="_blank">${data[index]['show']['webChannel']['name']}</a>`;
}

function showRating(data,index){
    /* If the show has a rating return the half of the rating value */
    if(data[index]['show']['rating'] == null || data[index]['show']['rating']['average'] == null){
        return 'No rating';
    }
    return parseInt(data[index]['show']['rating']['average']) / 2;
}

export { showInfo };
