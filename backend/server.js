const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const axios = require("axios");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.post("/upload", (req, res) => {

    const age = req.body.age;
    const workclass = req.body.workclass;
    const education = req.body.education;
    const maritalStatus = req.body.maritalStatus;
    const occupation = req.body.occupation;
    const relationship = req.body.relationship;
    const race = req.body.race;
    const sex = req.body.sex;
    const hoursPerWeek = req.body.hoursPerWeek;
    const nativeCountry = req.body.nativeCountry;


    data = {
        "age": age,
        "workclass": workclass,
        "education": education,
        "marital-status": maritalStatus,
        "occupation": occupation,
        "relationship": relationship,
        "race": race,
        "sex": sex,
        "hours-per-week": hoursPerWeek,
        "native-country": nativeCountry
    };

    console.log(data);
     // get data from formPage2
    axios
        .post("http://punkvise12.pythonanywhere.com/predict", data, {
            headers: {
                "Content-Type": "application/json",
            },
        }) // send data to localhost:5000 as JSON data
        .then((response) => {
            console.log(response.data.prediction[0]);
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
});

app.listen(process.env.PORT || 4000, () => console.log("Server is running"));
