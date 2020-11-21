import React from 'react';
import EmployeeTableItem from "../../components/TableItem";

// Takes in props, destructures props object as it is passed in
// In line 20 on, array.map() method is used to isolate relevant components and create an array
// of JSX components that are displayed on the page
export function EmployeeTable({data}){
  return (
    <tbody>
      {data.map(employee => 
        (
          <EmployeeTableItem
            key={employee.login.uuid}
            number={data.indexOf(employee) + 1}
            image={employee.picture.medium}
            name={`${employee.name.first} ${employee.name.last}`}
            phone={employee.phone}
            dob={employee.dob.date.slice(0, 10)}
          />
        ))
      }
    </tbody>
  )
}

export default EmployeeTable;
