import React, {useEffect, useState} from 'react';
import API from '../utils/API';
import Table from 'react-bootstrap/Table';
import Jumbotron from '../components/Jumbotron';
import EmployeeTable from '../components/EmployeeTable'

function Home() {
  //Stateful array used to store clean 'employee' data from API
  const [rawList, setRawList] = useState([])

  // Get data from API and update above list
  useEffect(() => {
    API.getUsers() 
    .then( res => {
      setRawList(res.data.results)
      setDisplayList(res.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  // Stateful array to contain (potentially) filtered data, intended for display
  const [displayList, setDisplayList] = useState(rawList);

  //imported all html/bootstrap components here, but might make sense to move some to App-header, nav
  return(
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>DOB</th>
      </tr>
    </thead>
      <EmployeeTable 
      data={displayList}
      />
    </Table>
  )
}

export default Home;