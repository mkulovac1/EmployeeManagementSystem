import React, { Component } from 'react';

class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }
    
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee E-mail</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}> 
                                        <td>
                                            {employee.firstName}
                                        </td>
                                        <td>
                                            {employee.lastName}
                                        </td>
                                        <td>
                                            {employee.emailId}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployee;