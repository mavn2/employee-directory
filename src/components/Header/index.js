import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

// Returns a full-width banner containing the app's title
// Arrow function syntax allows omitting parentheses around single parameter and for implicit return
const header = props => (
  <Jumbotron fluid style={{backgroundColor: "blue"}}>
    <Container>
      <h1 className="text-center text-white">{props.title}</h1>
    </Container>
  </Jumbotron>
);

export default header;
