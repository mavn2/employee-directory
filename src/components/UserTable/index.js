import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import UserTableItem from "../TableItem";

// Takes in props, destructures props object as it is passed in
// In line 20 on, array.map() method is used to isolate relevant components and create an array
// of JSX components that are displayed on the page
export function UserTable({data, filter}){
// State to store data for sorting/presentation
const [displayData, setDisplayData] = useState([]);
// Track sort type/status
const [sortState, setSortState] = useState("none")
console.log(filter)

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
      if(a.name.first === b.name.first){
        if(a.name.last < b.name.last){
          return -1;
        }
        if(a.name.last > b.name.last){
          return 1
        }
      }
      return 0;
    }))
    );
    setSortState("name")
};

  const defaultSort = () => {
    setDisplayData(displayData.sort((a, b) => {return a.sortIndex - b.sortIndex}));
    setSortState("none")
  };

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
        {displayData.map(user => {
          if(user.fullName.includes(filter)){
            return (
              <UserTableItem
                key={user.login.uuid}
                number={user.sortIndex + 1}
                image={user.picture.medium}
                name={user.fullName}
                phone={user.phone}
                dob={user.dob.date.slice(0, 10)}
              />
            )
          }
          return null;
          })
        }
      </tbody>
    </Table>
  )
}

export default UserTable;
