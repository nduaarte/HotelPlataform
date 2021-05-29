import React from 'react';

import { Container, Wrapper, Title, Description, CardWrapper } from './styles';

import api from '../../services/api';
import Header from '../../Components/Header';
import Filter from '../../Components/Filter';
import PropertyCard from '../../Components/PropertyCard';

import banner from '../../assets/images/hotel1.jpg'

const Properties: React.FC = () => {
  const ALL_PROPERTIES = api.map(item => (
    <PropertyCard
      title={item.name}
      description={item.description}
      banner={item.image}
      valueDay={item.info.valueDay}
      maxPeoples={item.info.maxPeoples}
      cleaningRate={item.info.cleaningRate}
      securityDeposit={item.info.securityDeposit}
      district={item.info.district}
      totalValue={item.info.totalValue}
    />
  ));

  return (
    <Container>
      <Header />
      <Filter />

      <Wrapper>
        <Title>Todos os Imóveis</Title>
        <Description>6 imóveis nesta região</Description>
        <CardWrapper>
          {ALL_PROPERTIES}
        </CardWrapper >
      </Wrapper >
    </Container >
  );
}

export default Properties;