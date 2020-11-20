import React, {useEffect, useState} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Table from '../components/EmployeeTable'

function Home() {

  const [list, setList] = useState({})
  //get from api, populate display components
  useEffect(() => {
    API.getUsers() 
    .then( res => {
      console.log(res.data.results)
      setList(res.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  //imported all html/bootstrap components here, but might make sense to move some to App-header, nav
  return(
    <div>test</div>
  )
}

export default Home;