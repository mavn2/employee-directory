import React from 'react';
import Form from 'react-bootstrap/Form';

// Returns search bar that could be integrated into a larger form, accepts input value/logic as params.
// Props object is destructured in line six below, ES6 allows implicit return 
const SearchBar = ({search, handleInputChange}) => (
    <Form>
      <Form.Group>
        <Form.Label>Search Users</Form.Label>
        <Form.Control
        type="text"
        placeholder="Search by Name"
        value={search}
        onChange={handleInputChange}
        />
      </Form.Group>
    </Form> 
);

export default SearchBar;
