import React from 'react';
import Table from 'react-bootstrap/Table';
import EmployeeTableItem from "../../components/TableItem"
//Takes in props, destructures props object as it is passed in
export function EmployeeTable({data}){
  console.log(data)
  console.log(data[1])

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </Table>
  )
}

export default EmployeeTable;
