""" Flask, CORS, and Json for setting up the API """
from flask import Flask
from flask_cors import CORS
import json
""" Constant variables and functions """
from CONSTANTS import API_URL
from tv_searcher import api_call


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/temp')
#temporary name for route
def show_info(search):
    #Fetch show_info dict from api_call function

    data = api_call(search)
    return json.dumps(data)




if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5500)