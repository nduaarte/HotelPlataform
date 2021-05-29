import React from 'react';

import {
  Container,
  Banner,
  Title,
  Row,
  WrapperIcon,
  AirBnBIcon,
  SeazoneIcon,
  MoreIcon,
  Description,
  Wrapper,
  Item,
  ItemText
} from './styles';

interface PropsTyes {
  banner?: string;
  title: string;
  description: string;
  valueDay: number;
  maxPeoples: number;
  cleaningRate: number;
  securityDeposit: number;
  district: string;
  totalValue: number;
}

const PropertyCard: React.FC<PropsTyes> = ({
  banner,
  title,
  description,
  valueDay,
  maxPeoples,
  cleaningRate,
  securityDeposit,
  district,
  totalValue
}) => {
  return (
    <Container>
      <Banner src={banner} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Row>
        <Row>
          <WrapperIcon>
            <AirBnBIcon />
          </WrapperIcon>
          <WrapperIcon>
            <SeazoneIcon />
          </WrapperIcon>
        </Row>
        <Row>
          <MoreIcon />
        </Row>
      </Row>

      <Wrapper>
        <Item>
          <ItemText>Valor diária</ItemText>
          <ItemText>R${valueDay},00 / noite</ItemText>
        </Item>
        <Item>
          <ItemText>Máximo de hóspedes</ItemText>
          <ItemText>{maxPeoples} pessoas</ItemText>
        </Item>
        <Item>
          <ItemText>Taxa de limpeza</ItemText>
          <ItemText>R${cleaningRate},00</ItemText>
        </Item>
        <Item>
          <ItemText>Caução</ItemText>
          <ItemText>R${securityDeposit},00</ItemText>
        </Item>
        <Item>
          <ItemText>Bairro</ItemText>
          <ItemText>{district}</ItemText>
        </Item>
        <Item>
          <ItemText bold={true} >TOTAL</ItemText>
          <ItemText bold={true} color='#00A358'>R${totalValue},00</ItemText>
        </Item>
      </Wrapper>
    </Container>
  );
}

export default PropertyCard;