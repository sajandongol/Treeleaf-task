import React, { Component } from 'react'
import { Container, Table, Button, Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewDataSuccess } from '../appRedux/userProfile/action'

class Profiles extends Component {

    handleViewClick = index => {
        const data = JSON.parse(localStorage.getItem('listData'))
        const personData = data.filter((person, i) => i === index)
        this.props.viewData(personData, index)
    }

    render() {
        return (
            <Container>
                <h2 style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>Profiles List</h2>
                {this.props.list.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <div>
                                    <div className='d-flex' style={{ width: "100%", border: "5px", marginTop: "25px", marginBottom: "18px" }}>
                                        <div style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: 'grey', marginLeft: '30px' }}>
                                            <h2 style={{ textAlign: 'center', lineHeight: "3" }}>{item.name.charAt(0)}</h2>
                                        </div>
                                        <div style={{ marginLeft: '50px', marginTop: '7px', width: 300 }}>
                                            <h5>Name: {item.name}</h5>
                                            <h6>Email Address: {item.email}</h6>
                                            <h6>Phone Number: {item.phoneNumber}</h6>
                                        </div>
                                        <div style={{ marginLeft: "450px", marginTop: "27px" }}>
                                            <Link to="/profiles/view">
                                                <Button onClick={() => this.handleViewClick(index)}>
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <br />
                        </div>
                    )
                })
                }
                <Link to="/">
                    <div style={{ textAlign: "center" }}>
                        <Button style={{ marginBottom: "15px" }} variant="secondary">Go Back</Button>
                    </div>
                </Link>
            </Container >
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.data.list,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewData: (data, index) => dispatch(viewDataSuccess(data, index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)