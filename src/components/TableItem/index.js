import React from 'react';

// Returns a row for the employee table based on props
// Destructuring props as they're passed in results in cleaner code
const UserTableItem = ({
  number,
  image,
  name,
  phone,
  dob,
}) => (
  <tr>
    <td>{number}</td>
    <td><img src={image} alt={name} /></td>
    <td>{name}</td>
    <td>{phone}</td>
    <td>{dob}</td>
  </tr>
);

export default UserTableItem;
