import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/formpage.css";

const FormPage2 = () => {
    const [formData, setFormData] = useState({
        age: "",
        workclass: "",
        education: "",
        maritalStatus: "",
        occupation: "",
        relationship: "",
        race: "",
        sex: "",
        hoursPerWeek: "",
        nativeCountry: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios
            .post(
                "https://income-prediction-backend.onrender.com/upload",
                formData,
                {}
            )
            .then((res) => {
                console.log(res.data.prediction[0]);
                if (res.data.prediction[0] === 1) {
                    navigate("/results1");
                } else {
                    navigate("/results2");
                }
                // navigate("/analytics");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container fluid className="containerform">
            <h1 className="heading">Enter your details</h1>
            <Form className="formpageMain">
                <Form.Control
                    type="number"
                    name="age"
                    className="inputField"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <Form.Select
                    name="workclass"
                    className="inputField"
                    placeholder="Workclass"
                    value={formData.workclass}
                    onChange={handleChange}
                >
                    <option>Workclass</option>
                    <option>Private</option>
                    <option>Self-emp-not-inc</option>
                    <option>Self-emp-inc</option>
                    <option>Federal-gov</option>
                    <option>Local-gov</option>
                    <option>State-gov</option>
                    <option>Without-pay</option>
                    <option>Never-worked</option>

                </Form.Select>

                <Form.Select
                    as="select"
                    name="education"
                    className="inputField"
                    placeholder="Education"
                    value={formData.education}
                    onChange={handleChange}
                >
                    <option>Education</option>
                    <option>Bachelors</option>
                    <option>Some-college</option>
                    <option>11th</option>
                    <option>HS-grad</option>
                    <option>Prof-school</option>
                    <option>Assoc-acdm</option>
                    <option>Assoc-voc</option>
                    <option>9th</option>
                    <option>7th-8th</option>
                    <option>12th</option>
                    <option>Masters</option>
                    <option>1st-4th</option>
                    <option>10th</option>
                    <option>Doctorate</option>
                    <option>5th-6th</option>
                    <option>Preschool</option>
                </Form.Select>

                <Form.Select
                    as="select"
                    name="maritalStatus"
                    className="inputField"
                    placeholder="Marital Status"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                >
                    <option>Marital Status</option>
                    <option>Married-civ-spouse</option>
                    <option>Divorced</option>
                    <option>Never-married</option>
                    <option>Separated</option>
                    <option>Widowed</option>
                    <option>Married-spouse-absent</option>
                    <option>Married-AF-spouse</option>
                </Form.Select>

                <Form.Select
                    as="select"
                    name="occupation"
                    className="inputField"
                    placeholder="Occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                >
                    <option>Occupation</option>
                    <option>Tech-support</option>
                    <option>Craft-repair</option>
                    <option>Other-service</option>
                    <option>Sales</option>
                    <option>Exec-managerial</option>
                    <option>Prof-specialty</option>
                    <option>Handlers-cleaners</option>
                    <option>Machine-op-inspct</option>
                    <option>Adm-clerical</option>
                    <option>Farming-fishing</option>
                    <option>Transport-moving</option>
                    <option>Priv-house-serv</option>
                    <option>Protective-serv</option>
                    <option>Armed-Forces</option>
                </Form.Select>

                <Form.Select
                    as="select"
                    name="relationship"
                    className="inputField"
                    placeholder="Relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                >
                    <option>Relationship</option>
                    <option>Wife</option>
                    <option>Own-child</option>
                    <option>Husband</option>
                    <option>Not-in-family</option>
                    <option>Other-relative</option>
                    <option>Unmarried</option>
                </Form.Select>

                <Form.Select
                    as="select"
                    name="race"
                    className="inputField"
                    placeholder="Race"
                    value={formData.race}
                    onChange={handleChange}
                >
                    <option>Race</option>
                    <option>White</option>
                    <option>Asian-Pac-Islander</option>
                    <option>Amer-Indian-Eskimo</option>
                    <option>Other</option>
                    <option>Black</option>
                </Form.Select>

                <Form.Select
                    as="select"
                    name="sex"
                    className="inputField"
                    placeholder="Sex"
                    value={formData.sex}
                    onChange={handleChange}
                >
                    <option>Sex</option>
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>

                <Form.Control
                    type="number"
                    name="hoursPerWeek"
                    className="inputField"
                    placeholder="Hours per Week"
                    value={formData.hoursPerWeek}
                    onChange={handleChange}
                />

                <Form.Select
                    as="select"
                    name="nativeCountry"
                    className="inputField"
                    placeholder="Native Country"
                    value={formData.nativeCountry}
                    onChange={handleChange}
                >
                    <option>Native Country</option>
                    <option>United-States</option>
                    <option>Cambodia</option>
                    <option>England</option>
                    <option>Puerto-Rico</option>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>Outlying-US(Guam-USVI-etc)</option>
                    <option>India</option>
                    <option>Japan</option>
                    <option>Greece</option>
                    <option>South</option>
                    <option>China</option>
                    <option>Cuba</option>
                    <option>Iran</option>
                    <option>Honduras</option>
                    <option>Philippines</option>
                    <option>Italy</option>
                    <option>Poland</option>
                    <option>Jamaica</option>
                    <option>Vietnam</option>
                    <option>Mexico</option>
                    <option>Portugal</option>
                    <option>Ireland</option>
                    <option>France</option>
                    <option>Dominican-Republic</option>
                    <option>Laos</option>
                    <option>Ecuador</option>
                    <option>Taiwan</option>
                    <option>Haiti</option>
                    <option>Columbia</option>
                    <option>Hungary</option>
                    <option>Guatemala</option>
                    <option>Nicaragua</option>
                    <option>Scotland</option>
                    <option>Thailand</option>
                    <option>Yugoslavia</option>
                    <option>El-Salvador</option>
                    <option>Trinadad&Tobago</option>
                    <option>Peru</option>
                    <option>Hong</option>
                    <option>Holand-Netherlands</option>
                </Form.Select>

                <Button
                    variant="primary"
                    type="submit"
                    className="submitButton"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default FormPage2;
