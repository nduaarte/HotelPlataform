import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
  const [routeSelect, setRouteSelect] = useState<string>();
  const history = useHistory();

  function handleItem(routeName: string) {
    setRouteSelect(routeName);
    navigate(routeName);
    console.log(routeName);
  }

  function navigate(routeName: string) {
    history.push(`/${routeName}`);
  }  

  return (
    <Container>
      <LeftSide>
        <Title>HOTEL PARK</Title>
        <Item
          onClick={() => handleItem('calendar')}
            borderColor={routeSelect === 'calendar' ? true : false}>
          <ItemText>Calendário</ItemText>
          <CalendarIcon />
        </Item>

        <Item
          onClick={() => handleItem('clients')}
          borderColor={routeSelect === 'clients' ? true : false}>
          <ItemText>Clientes</ItemText>
          <ClientIcon />
        </Item>

        <Item
          onClick={() => handleItem('budget')}
          borderColor={routeSelect === 'budget' ? true : false}>
          <ItemText>Orçamentos</ItemText>
          <BudgetIcon />
        </Item>

        <Item
          onClick={() => handleItem('properties')}
          borderColor={routeSelect === 'properties' ? true : false}>
          <ItemText>Propriedades</ItemText>
          <PropertyIcon />
        </Item>

        <Item
          onClick={() => handleItem('control')}
          borderColor={routeSelect === 'control' ? true : false}>
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