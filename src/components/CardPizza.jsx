import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column">
        <ListGroup variant="flush" className="flex-grow-1">
          <ListGroup.Item>
            <Card.Title className="card-title">{name}</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>Ingredientes: {ingredients.join(', ')}</ListGroup.Item>
          <ListGroup.Item>Precio: ${price.toLocaleString()}</ListGroup.Item>
        </ListGroup>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="secondary" className="me-2">Ver Más 👀</Button>
          <Button variant="primary" className="ms-2">Añadir a 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
