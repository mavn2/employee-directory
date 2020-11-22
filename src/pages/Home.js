import React, {useEffect, useState} from 'react';
import API from '../utils/API';
import SearchBar from '../components/SearchBar'
import EmployeeTable from '../components/EmployeeTable'

function Home() {
  //Stateful array used to store clean 'employee' data from API
  const [rawList, setRawList] = useState([])

  // Get data from API and update above list
  useEffect(() => {
    API.getUsers() 
    .then( res => {
      setRawList(res.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  //imported all html/bootstrap components here, but might make sense to move some to App-header, nav
  return(
    <div>
      <SearchBar />
      <EmployeeTable 
      data={rawList.map(employee => {return { ...employee, sortIndex: rawList.indexOf(employee)}})}
      />
    </div>
  )
}

export default Home;