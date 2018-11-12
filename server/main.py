from flask import Flask,jsonify
from flask_pymongo import PyMongo
import json
from bson.json_util import dumps


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Hilfe"
mongo = PyMongo(app)
mongo=mongo.db.contracts
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def getcontracts():
    lists=mongo.find()
    return dumps(lists )
    
    
if __name__ == "__main__":
    app.run(host='0.0.0.0')
