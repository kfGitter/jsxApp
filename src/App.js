import './App.css';

import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';


function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Image/>
        <Card.Body>
          <Name/>
          <Price/>
          <Description/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
