import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4"> {/* Ajusta la cantidad de tarjetas por fila en diferentes tamaños de pantalla */}
      <Card className="text-center">
        <Card.Img variant="top" src={img} className="card-img-top" />
        <Card.Body className="d-flex flex-column align-items-center p-3">
          <h2><Card.Title className="mb-3 flush-item display-6">{name}</Card.Title></h2>
          <ListGroup variant="flush" className="w-100">
            <ListGroup.Item className="text-center flush-item">
              Ingredientes:
              <ul className="list-unstyled">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item className="text-center flush-item">Precio: ${price.toLocaleString()}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-between w-100 mt-3">
            <Button variant="secondary" className="flush-item me-2">Ver Más 👀</Button>
            <Button variant="primary" className="flush-item ms-2">Añadir a 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardPizza;
