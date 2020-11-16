import React, { Component } from "react";
// import './App.css';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { fetchCountries } from "../appRedux/countries/api";
import { connect } from 'react-redux';
import { insertSuccess, updateSuccess } from "../appRedux/data/action";
import { showNotification } from "../utils/notification"

class ListForm extends Component {
    state = {
        ...this.returnStateObject(),
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                name: "",
                email: "",
                phoneNumber: "",
                dateOfBirth: "",
                city: "",
                district: "",
                province: "",
                country: "Nepal",
                numberError: ""
            }
        else {
            return this.props.list[this.props.currentIndex]
        }
    }

    componentDidMount() {
        this.props.fetchCountries();
    }

    validate = () => {
        let numberError = "";

        if (this.state.phoneNumber.length <= 7) {
            numberError = 'Must have more than 7 Numbers';
        }

        if (numberError) {
            this.setState({ numberError });
            return false
        }

        return true
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("clicked")
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                name: "",
                email: "",
                phoneNumber: "",
                dateOfBirth: "",
                city: "",
                district: "",
                province: "",
                country: "Nepal",
                numberError: ""
            })

            if (this.props.currentIndex === -1) {               //for new data insertion
                this.props.insertData(this.state)
                showNotification("Successfully Added")
            }
            else {
                this.props.updateData(this.state)               //for edit data
                showNotification("Updated Successfully")
            }

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
            this.setState({ ...this.returnStateObject() })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        if (!this.props.countries.data) {
            return <div>Loading...</div>
        }
        const countries = this.props.countries
        // console.log("Countries data: ", countries.data.DZ)

        // let d = JSON.parse(getLocalStorageItem('data'))

        return (
            <div>
                <h3 style={{ marginLeft: "500px" }}>React Redux Task</h3>
                <Card>
                    <Form onSubmit={this.handleSubmit} style={{ margin: "20px" }}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Name <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control required name="name" value={this.state.name} type="text" placeholder="Enter Name" onChange={this.handleInputChange} />
                                </Col>
                                <Col>
                                    <Form.Label>Email Address <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control required name="email" value={this.state.email} type="email" placeholder="Enter Email" onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Phone Number <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control required minLength='7' name="phoneNumber" value={this.state.phoneNumber} type="number" placeholder="Enter Phone Number" onChange={this.handleInputChange} />
                                    <div style={{ color: "red" }}>{this.state.numberError}</div>
                                </Col>
                                <Col>
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control name="dateOfBirth" value={this.state.dateOfBirth} placeholder="Enter Date Of Birth" onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control name="city" value={this.state.city} placeholder="Enter City" onChange={this.handleInputChange} />
                                </Col>
                                <Col>
                                    <Form.Label>District</Form.Label>
                                    <Form.Control name="district" value={this.state.district} placeholder="Enter District" onChange={this.handleInputChange} />
                                </Col>
                                <Col>
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control as="select" name="province" value={this.state.province} onChange={this.handleInputChange}>
                                        <option>Choose...</option>
                                        <option>Province 1</option>
                                        <option>Province 2</option>
                                        <option>Province 3</option>
                                        <option>Province 4</option>
                                        <option>Province 5</option>
                                        <option>Province 6</option>
                                        <option>Province 7</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" name="country" value={this.state.country} onChange={this.handleInputChange}>
                                        <option>{countries.data.AF.country}</option>
                                        <option>{countries.data.CN.country}</option>
                                        <option>{countries.data.IN.country}</option>
                                        <option>{countries.data.JP.country}</option>
                                        <option>{countries.data.LK.country}</option>
                                        <option>{countries.data.NP.country}</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card>
                <br />
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        countries: state.countries.all,
        list: state.data.list,
        currentIndex: state.data.currentIndex
        // successMessage: state.skills.successMessage,
        // errorMessage: state.skills.errorMessage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // clearMessage: () => dispatch(clearMessage()),
        fetchCountries: () => dispatch(fetchCountries()),
        insertData: (data) => dispatch(insertSuccess(data)),
        updateData: (data) => dispatch(updateSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
