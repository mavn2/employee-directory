import React, {useEffect, useState} from 'react';
import API from '../utils/API';
import SearchBar from '../components/SearchBar'
import UserTable from '../components/UserTable'

function Home() {
  // Stateful array used to store clean 'user' data from API
  const [rawList, setRawList] = useState([])
  // Stateful string to hold user search value
  const [search, setSearch] = useState("")

  // Get data from API and update above list
  useEffect(() => {
    API.getUsers() 
    .then( res => {
      setRawList(res.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  // Handles user inputs in search bar
  const handleInputChange = event => {
    // Update search state to reflect user input
    setSearch(event.target.value)
  }

  // Returns app's main page/components
  // User objects passed to UserTable are given two additional keys/values
  return(
    <div>
      <SearchBar
      search={search}
      handleInputChange={handleInputChange}
      />
      <UserTable 
      filter={search}
      data={rawList.map(user => {
        return { 
          ...user, 
          sortIndex: rawList.indexOf(user), 
          fullName: `${user.name.first} ${user.name.last}`,
        }
      })}
      />
    </div>
  )
}

export default Home;