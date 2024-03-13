import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

function EmployeeDetail() {
    const { state } = useLocation();

    const employees = [
        { id: 1, name: 'Hoa', age: 20 },
        { id: 2, name: 'Khánh', age: 25 },
        { id: 3, name: 'Tú', age: 22 },
    ];

    const employee = employees.find(emp => emp.id === state.employeeId);

    return (
        <div>
            <h1>Employee Detail</h1>
            {employee ? (
                <div>
                    <p>ID: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>Age: {employee.age}</p>
                </div>
            ) : (
                <p>Employee not found</p>
            )}
        </div>
    );
}

export default EmployeeDetail;
