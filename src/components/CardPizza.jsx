import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'; 

function CardPizza({ name, price, ingredients, img }) {
  return (
    <Col xs={12} md={4} className="d-flex justify-content-center"> {/* Ajuste de columnas para responsividad */}
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src={img} /> {/* Usa la URL de imagen recibida por props */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Precio:</strong> ${price} CLP<br/>
            <strong>Ingredientes:</strong> {ingredients.join(', ')} 
          </Card.Text>
          <Button variant="primary">Ordenar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardPizza;
