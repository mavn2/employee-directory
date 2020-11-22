import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import EmployeeTableItem from "../../components/TableItem";

// Takes in props, destructures props object as it is passed in
// In line 20 on, array.map() method is used to isolate relevant components and create an array
// of JSX components that are displayed on the page
export function EmployeeTable({data}){
// State to store data for sorting/presentation
const [displayData, setDisplayData] = useState([]);
// Track sort type/status
const [sortState, setSortState] = useState("none")

useEffect(() => {
  setDisplayData(data)
}, [data])

const sortByName = () => {
    setDisplayData(displayData.sort(((a, b) => {
      if (a.name.first < b.name.first){
        return -1;
        };
      if(a.name.first > b.name.first){
        return 1;
      };
      return 0;
      }))
    );
    setSortState("name")
};



const defaultSort = () => {
  setDisplayData(displayData.sort((a, b) => {return a.sortIndex - b.sortIndex}));
  setSortState("none")
  console.log(displayData)
}


  return (
    <Table>
      <thead>
        <tr>
          <th><button onClick={()=>defaultSort()}>#</button></th>
          <th>Image</th>
          <th><button onClick={() => sortByName()}>Name</button></th>
          <th>Phone</th>
          <th>DOB</th>
        </tr>
    </thead>
      <tbody>
        {displayData.map(employee => 
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
    </Table>
  )
}

export default EmployeeTable;
