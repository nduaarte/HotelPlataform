import React from 'react';

import Header from '../../Components/Header';
import Filter from '../../Components/Filter';

import img from '../../assets/images/hotel1.jpg';

import Cards from './Cards';

import { 
  Container, 
  Wrapper,
  LeftSide, 
  ImageProperty, 
  SubTitle,
  Description, 
  RightSide,
  PropertyName,
  Row,
  Availability
} from './styles';

const InfoProperty: React.FC = () => {
  return (
    <Container>
      <Header />
      <Filter />
      <Wrapper>
        <LeftSide>
          <ImageProperty src={img} />
          <SubTitle>Localização</SubTitle>
          <Description>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</Description>
        </LeftSide>
        <RightSide>
          <PropertyName>{'Hotel fuinha, vista mar top'}</PropertyName>
          <Description>{'Juerere internacional, Floripa'}</Description>
          <Row>
            <Description color='#ffff' >{'tv, wifi, garagem'}</Description>
            <Availability>{'disponível'}</Availability>
          </Row>

          <Cards />
        </RightSide>
      </Wrapper>
    </Container>
  );
}

export default InfoProperty;