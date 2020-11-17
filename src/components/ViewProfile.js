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
                <h2 style={{ marginTop: "15px", textAlign: "center", marginBottom: "30px" }}>Profile View Page</h2>

                <Card style={{ marginLeft: "280px", width: '50rem' }}>
                    <div className='d-flex' style={{ width: "100%", border: "5px", marginTop: "25px", marginBottom: "18px" }}>
                        <div style={{ width: 150, height: 150, borderRadius: 100, backgroundColor: 'grey', marginLeft: '320px' }}>
                            <h1 style={{ textAlign: 'center', lineHeight: "3.7" }}>{userDetail[0].name.charAt(0)}</h1>
                        </div>
                    </div>
                    <Card.Body style={{ margin: "50px" }}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card.Title>Name: {userDetail[0].name} </Card.Title>
                                </Col>
                                <Col >
                                    <Card.Title>Email: {userDetail[0].email} </Card.Title>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Title>Phone Number: {userDetail[0].phoneNumber} </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Title>Data Of Birth: {userDetail[0].dateOfBirth} </Card.Title>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Title>City: {userDetail[0].city} </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Title>District: {userDetail[0].district} </Card.Title>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Title>Province: {userDetail[0].province} </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Title>Country: {userDetail[0].country} </Card.Title>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Link to='/profiles'>
                                        <Button variant="secondary">Go Back</Button>
                                    </Link>{'  '}
                                    <Link to='/'>
                                        <Button onClick={() => this.handleEdit(this.props.indexData)} variant="primary">Edit</Button>
                                    </Link>{'  '}
                                </Col>
                                <Col>
                                    <Link to='/'>
                                        <Button variant="success">Go to Home</Button>
                                    </Link>{'  '}
                                </Col>
                            </Row>
                        </Container>
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