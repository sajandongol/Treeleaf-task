import React, { Component } from 'react'
import ListForm from './ListForm'
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { insertSuccess, updateSuccess, deleteSuccess, updateIndexSuccess, updateTableSuccess } from '../appRedux/data/action'
import { Link } from 'react-router-dom'
import { showNotification } from "../utils/notification"


class ListTable extends Component {

    handleEdit = index => {
        this.props.updateIndexData(index)
    }

    handleDelete = index => {
        this.props.deleteData(index)
        showNotification("Deleted Successfully")
    }

    handleSort = () => {
        const dataList = this.props.list
        dataList.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1;
            return 0;
        });

        this.props.updateTable(dataList)

    }

    render() {
        return (
            <div style={{ margin: 30 }}>
                <ListForm />
                <h3 style={{ textAlign: "center" }}>Table</h3>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th onClick={this.handleSort}>Name *</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>DOB</th>
                            <th>City</th>
                            <th>District</th>
                            <th>Province</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.dateOfBirth}</td>
                                        <td>{item.city}</td>
                                        <td>{item.district}</td>
                                        <td>{item.province}</td>
                                        <td>{item.country}</td>
                                        <td>
                                            <Button size="sm" onClick={() => this.handleEdit(index)}>Edit</Button>
                                            {" "}<Button size="sm" variant="danger" onClick={() => this.handleDelete(index)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

                {
                    this.props.list[0] ? (
                        <Link to='/profiles'>
                            <div style={{ textAlign: "center" }}>
                                <Button variant="warning" >View Profiles</Button>
                            </div>
                        </Link>
                    ) : (<Link to='/profiles'>
                        <div style={{ textAlign: "center" }}>
                            <Button disabled variant="warning" style={{ textAlign: "center" }}>View Profiles</Button>
                        </div>
                    </Link>)
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.data.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteData: (index) => dispatch(deleteSuccess(index)),
        updateIndexData: (data) => dispatch(updateIndexSuccess(data)),
        updateTable: (data) => dispatch(updateTableSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTable)