import React from 'react';

import { Container, Card, CardTitle, Row, CardValue, PeopleIcon, CleanIcon, PayIcon } from './styles';

interface PropsTyes {
  peoples: number;
  cleaningRate: number;
  securityDeposit: number;
}

const Cards: React.FC<PropsTyes> = ({ peoples, cleaningRate, securityDeposit }) => {
  return (
    <Container>
      <Card>
        <CardTitle>Máx. de hóspedes</CardTitle>
        <Row>
          <PeopleIcon />
          <CardValue>{`${peoples} pessoas`}</CardValue>
        </Row>
      </Card>
      <Card>
        <CardTitle>Taxa de limpeza</CardTitle>
        <Row>
          <CleanIcon />
          <CardValue>{`R$${cleaningRate},00`}</CardValue>
        </Row>
      </Card>
      <Card>
        <CardTitle>Caução</CardTitle>
        <Row>
          <PayIcon />
          <CardValue>{`R$${securityDeposit},00`}</CardValue>
        </Row>
      </Card>
    </Container>
  );
}

export default Cards;