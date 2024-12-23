""" Flask, CORS, and Json for setting up the API """
from flask import Flask, jsonify
from flask_cors import CORS
""" Constant variables and functions """
from tv_searcher import api_call


app = Flask(__name__)
cors = cors = CORS(app, resources={r"/temp/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/temp/<string:search>', methods=['GET'])
#temporary name for route
def show_info(search):
    #Fetch show_info dict from api_call function
    data = api_call(search)
    return jsonify(data), 200




if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5500)