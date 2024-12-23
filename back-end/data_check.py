from CONSTANTS import API_URL


def imgCheck(index):
    #Chec if shows cover image exists in the API
    if index['show']['image'] == None or index['show']['image']['medium'] == None:
        return "assets/default_image.png"
    
    return index['show']['image']['medium']


def webChannelCheck(index):
    #Check if webChannel exists in the API
    if index['show']['webChannel'] == None:
        return "No web channel provided", "<p> No web channel provided. </p>"

    webUrl = f"https://www.tvmaze.com/webchannels/{index['show']['webChannel']['id']}/{index['show']['webChannel']['name']}"
    return index['show']['webChannel']['name'], f'Web channel: <a href = "{webUrl}" target="_blank">{index['show']['webChannel']['name']}</a>'


def summaryCheck(index):
    #Check if summary exists in the API
    if index['show']['summary'] == None:
        return "No summary provided"
    
    return index['show']['summary']


def ratingCheck(index):
    #Check if the rating exists in the API
    if index['show']['rating'] == None or index['show']['rating']['average'] == None:
        return "No rating"
    
    return int(index['show']['rating']['average']) / 2


def showInfo(data):
    #Format and add items into the show_info dict created above
    show_info = {}
    pointer = 0

    for index in data:
        show_info[pointer] = {
            "name": index['show']['name'],
            "url": index['show']['url'],
            "image": imgCheck(index),
            "webChannel": webChannelCheck(index)[0],
            "webChannelUrl": webChannelCheck(index)[1],
            "summary": summaryCheck(index),
            "rating": ratingCheck(index)
        }
        pointer = pointer + 1
        
    return show_info
