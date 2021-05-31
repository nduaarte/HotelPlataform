import React from 'react';

import { Container, 
  Item, 
  ItemName, 
  ItemSelect, 
  ItemText, 
  ArrowIcon, 
  FindButton, 
  MoreFilters, 
  Wrapper 
} from './styles';

const Filter: React.FC = () => {
  return (
    <Container>
      <Item>
        <ItemName>Localização</ItemName>
        <ItemSelect>
          <ItemText>Florianópolis</ItemText>
          <ArrowIcon />
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>Preço</ItemName>
        <ItemSelect>
          <ItemText>300 - 1000</ItemText>
          <ArrowIcon />
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>Check-in</ItemName>
        <ItemSelect>
          <ItemText>24/04/20201</ItemText>
          <ArrowIcon />
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>Check-out</ItemName>
        <ItemSelect>
          <ItemText>27/04/20201</ItemText>
          <ArrowIcon />
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>N° de hóspedes</ItemName>
        <ItemSelect>
          <ItemText>Um</ItemText>
          <ArrowIcon />
        </ItemSelect>
      </Item>

      <Wrapper>
        <FindButton>Buscar</FindButton>
        <MoreFilters>+ Mais Filtros</MoreFilters>
      </Wrapper>
    </Container>
  );
}

export default Filter;