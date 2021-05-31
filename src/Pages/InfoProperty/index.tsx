import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../Redux/InfoPropertyReducer';

import Header from '../../Components/Header';
import Filter from '../../Components/Filter';
import Cards from '../../Components/Cards';

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
  const Property = useSelector((state: RootState) => state.InfoPropertyReducer.property);
  const { name, info, image, privileges, status } = Property;
  const { address, district, maxPeoples, cleaningRate, securityDeposit } = info;

  return (
    <Container>
      <Header />
      <Filter />
      <Wrapper>
        <LeftSide>
          <ImageProperty src={image} />
          <SubTitle>Localização</SubTitle>
          <Description>{`${address} - ${district}`}</Description>
        </LeftSide>
        <RightSide>
          <PropertyName>{name}</PropertyName>
          <Description>{district}</Description>
          <Row>
            <Description color='#ffff' >{privileges}</Description>
            <Availability status={status} >{status ? 'Disponível' : 'Indisponível'}</Availability>
          </Row>

          <Cards
            peoples={maxPeoples}
            cleaningRate={cleaningRate}
            securityDeposit={securityDeposit}
          />
        </RightSide>
      </Wrapper>
    </Container>
  );
}

export default InfoProperty;