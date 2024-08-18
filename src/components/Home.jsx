import React from 'react';
import CardPizza from './CardPizza';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { pizzas } from './pizzas'; // Importamos el array de pizzas

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
