import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({adam2}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            
      <Card.Img variant="top" src={adam2.url} />
      <Card.Body>
        <Card.Title>{adam2.name}</Card.Title>
        <Card.Text>
        <b>{adam2.age}</b><br />
        <i>{adam2.nationality}</i><br />
        <u>{adam2.team}</u>
        </Card.Text>
        <Button variant="primary">{adam2.jerseyNumber}</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default Player