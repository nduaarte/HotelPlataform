import React from 'react';

import { Container, Item, ItemName, ItemSelect, FindButton, MoreFilters, Wrapper } from './styles';

const Filter: React.FC = () => {
  return (
    <Container>
      <Item>
        <ItemName>Localização</ItemName>
        <ItemSelect>
          <option value='florianópolis'>Florianópolis</option>
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>Preço</ItemName>
        <ItemSelect>
          <option value='300 - 1000'>300 - 1000</option>
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>Check-in</ItemName>
        <ItemSelect>
          <option value='24/04/20201'>24/04/20201</option>
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>Check-out</ItemName>
        <ItemSelect>
          <option value='27/04/20201'>27/04/20201</option>
        </ItemSelect>
      </Item>

      <Item>
        <ItemName>N° de hóspedes</ItemName>
        <ItemSelect>
          <option value='1'>Um</option>
          <option value='2'>Dois</option>
          <option value='3'>Três</option>
          <option value='4'>Quatro</option>
          <option value='5'>Cinco</option>
          <option value='5+'>Mais de 5</option>
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