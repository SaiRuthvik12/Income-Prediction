from flask import Flask, request, jsonify
import pickle
import numpy as np
import json
from flask_cors import CORS
import pandas as pd
from sklearn import preprocessing

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000', 'http://localhost:5000', 'http://localhost:8080'])

# Load the pickle model
with open('knnmodel', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the request
    data = request.get_json()

    age = int(data['age'])
    workclass = data['workclass']
    fnlwgt = 1000000
    education = data['education']
    marital_status = data['marital-status']
    occupation = data['occupation']
    relationship = data['relationship']
    race = data['race']
    gender = data['sex']
    hours_per_week = data['hours-per-week']
    native_country = data['native-country']

    arr = [[age, workclass, fnlwgt, education, marital_status, occupation, relationship, race, gender, hours_per_week, native_country]]

    dataset = pd.read_csv("adult.csv")
    dataset = dataset.drop(['educational-num', 'capital-gain', 'capital-loss', 'income'], axis=1)

    label_encoder = preprocessing.LabelEncoder()

    # Apply label encoding to the categorical data
    dataset['gender'] = label_encoder.fit_transform(dataset['gender'])
    arr[0][8] = label_encoder.transform([arr[0][8]])[0]

    dataset['workclass'] = label_encoder.fit_transform(dataset['workclass'])
    arr[0][1] = label_encoder.transform([arr[0][1]])[0]

    dataset['education'] = label_encoder.fit_transform(dataset['education'])
    arr[0][3] = label_encoder.transform([arr[0][3]])[0]

    dataset['marital-status'] = label_encoder.fit_transform(dataset['marital-status'])
    arr[0][4] = label_encoder.transform([arr[0][4]])[0]

    dataset['occupation'] = label_encoder.fit_transform(dataset['occupation'])
    arr[0][5] = label_encoder.transform([arr[0][5]])[0]

    dataset['relationship'] = label_encoder.fit_transform(dataset['relationship'])
    arr[0][6] = label_encoder.transform([arr[0][6]])[0]

    dataset['race'] = label_encoder.fit_transform(dataset['race'])
    arr[0][7] = label_encoder.transform([arr[0][7]])[0]

    dataset['native-country'] = label_encoder.fit_transform(dataset['native-country'])
    arr[0][10] = label_encoder.transform([arr[0][10]])[0]


    print(arr)
    # Make a prediction using the loaded model
    prediction = model.predict(arr)

    # Return the prediction as a JSON response
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
