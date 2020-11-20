import React from "react";

//Returns a row for the employee table based on props
const EmployeeTableItem= ({
  number,
  image,
  name,
  phone,
  dob
}) => {
  return (
    <tr>
      <td>{number}</td>
      <td><image src={image} alt={name}/></td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{dob}</td>
    </tr>
  )
}

export default EmployeeTableItem;
