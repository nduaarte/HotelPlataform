import React from 'react';

import { Container, Card, CardTitle, Row, CardValue, PeopleIcon, CleanIcon, PayIcon } from './styles';

interface PropsTyes {

}

const Cards: React.FC<PropsTyes> = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Máx. de hóspedes</CardTitle>
        <Row>
          <PeopleIcon />
          <CardValue>{`${'6'} pessoas`}</CardValue>
        </Row>
      </Card>
      <Card>
        <CardTitle>Máx. de hóspedes</CardTitle>
        <Row>
          <CleanIcon />
          <CardValue>{`R$${'60'},00`}</CardValue>
        </Row>
      </Card>
      <Card>
        <CardTitle>Máx. de hóspedes</CardTitle>
        <Row>
          <PayIcon />
          <CardValue>{`R$${'700'},00`}</CardValue>
        </Row>
      </Card>
    </Container>
  );
}

export default Cards;