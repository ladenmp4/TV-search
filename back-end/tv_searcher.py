from json.decoder import JSONDecodeError
import requests
from CONSTANTS import API_URL
from data_check import showInfo

def api_call(search):
    """ Function to call the TV catalog api """
    try:
        response = requests.get(API_URL + search, timeout=5)
        response.raise_for_status()
        data = response.json()

#Try catch API errors
    except requests.exceptions.ConnectionError as connectionError:
        print(connectionError)
        return "Cant connect to API."
    except requests.exceptions.Timeout as timeOutError:
        print(timeOutError)
        return "API timed out."
    except requests.exceptions.HTTPError as httpError:
        print(httpError)
        return "HTTP error occured on API"

#Try catch JSON errors
    except JSONDecodeError as jsonError:
        print(jsonError)
        return "Error on JSON"

    print("API call succesfull")
    return showInfo(data)

api_call("The Boys")
