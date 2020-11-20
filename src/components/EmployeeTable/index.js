import Table from 'react-bootstrap/Table'

//Takes in child elements as prop
export function EmployeeTable(props){
  console.log(props.data)
  return (
    <Table className='table'>
      <thead>
      </thead>
    </Table>
  )
}

export default EmployeeTable;