import React from 'react';

import {
  Container,
  LeftSide,
  RightSide,
  Title,
  Item,
  ItemText,
  CalendarIcon,
  ClientIcon,
  BudgetIcon,
  PropertyIcon,
  ControlIcon,
  UserIcon
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Title>SEAZONE</Title>
        <Item>
          <ItemText>Calendário</ItemText>
          <CalendarIcon />
        </Item>
        <Item>
          <ItemText>Clientes</ItemText>
          <ClientIcon />
        </Item>
        <Item>
          <ItemText>Orçamentos</ItemText>
          <BudgetIcon />
        </Item>
        <Item>
          <ItemText>Propriedades</ItemText>
          <PropertyIcon />
        </Item>
        <Item>
          <ItemText>Controle</ItemText>
          <ControlIcon />
        </Item>
      </LeftSide>

      <RightSide>
        <UserIcon />
      </RightSide>
    </Container>
  );
}

export default Header;