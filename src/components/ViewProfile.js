import React, { Component } from 'react'
import { Container, Table, Button, Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateIndexSuccess } from '../appRedux/data/action'

class ViewProfile extends Component {

    handleEdit = (index) => {
        // console.log('handle edit: ', index);
        this.props.updateIndexData(index)
    }

    render() {
        const userDetail = this.props.userData

        return (
            <div>
                <h2 style={{ marginTop: "15px", marginLeft: "550px", marginBottom: "30px" }}>Profile View Page</h2>

                <Card style={{ marginLeft: "280px", width: '50rem' }}>
                    <div className='d-flex' style={{ width: "100%", border: "5px", marginTop: "25px", marginBottom: "18px" }}>
                        <div style={{ width: 150, height: 150, borderRadius: 100, backgroundColor: 'grey', marginLeft: '320px' }}>
                            <h1 style={{ textAlign: 'center', lineHeight: "3.7" }}>{userDetail[0].name.charAt(0)}</h1>
                        </div>
                    </div>
                    <Card.Body style={{ marginLeft: "50px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Card.Title>Name: {userDetail[0].name} </Card.Title>
                                </div>
                                <div className="col">
                                    <Card.Title>Email: {userDetail[0].email} </Card.Title>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <Card.Title>Phone Number: {userDetail[0].phoneNumber} </Card.Title>
                                </div>
                                <div className="col">
                                    <Card.Title>Data Of Birth: {userDetail[0].dateOfBirth} </Card.Title>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <Card.Title>City: {userDetail[0].city} </Card.Title>
                                </div>
                                <div className="col">
                                    <Card.Title>District: {userDetail[0].district} </Card.Title>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <Card.Title>Province: {userDetail[0].province} </Card.Title>
                                </div>
                                <div className="col">
                                    <Card.Title>Country: {userDetail[0].country} </Card.Title>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <Link to='/profiles'>
                                        <Button variant="secondary">Go Back</Button>
                                    </Link>{'  '}
                                    <Link to='/'>
                                        <Button onClick={() => this.handleEdit(this.props.indexData)} variant="primary">Edit</Button>
                                    </Link>{'  '}
                                </div>
                                <div className="col">
                                    <Link to='/'>
                                        <Button variant="success">Go to Home</Button>
                                    </Link>{'  '}
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.profile.data,
        indexData: state.profile.index
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateIndexData: (index) => dispatch(updateIndexSuccess(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)