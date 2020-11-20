import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'

//Takes in child elements as prop
export function EmployeeTable(props){
  console.log(props.data)
  console.log(props.data[1])
  useEffect()
  return (
    <Table className='table'>
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
        <tr></tr>
      </tbody>
    </Table>
  )
}

export default EmployeeTable;