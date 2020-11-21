import React from 'react';
import Table from 'react-bootstrap/Table';
import EmployeeTableItem from "../../components/TableItem"
//Takes in props, destructures props object as it is passed in
export function EmployeeTable({data}){
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
      {data.map(employee => {
        return (
        <EmployeeTableItem
          number={data.indexOf(employee) + 1}
          image={employee.picture.thumbnail}
          name={`${employee.name.first} ${employee.name.last}`}
          phone={employee.phone}
          dob={employee.dob.date.slice(0, 10)}
        />
      )})}
      </tbody>
    </Table>
  )
}

export default EmployeeTable;
