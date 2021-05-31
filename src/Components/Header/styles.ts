import styled, { css } from 'styled-components';

import { AiOutlineCalendar, AiOutlineControl } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsCardChecklist, BsHouse } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const  RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Title = styled.h1`
  display: none;
  color: var(--white);
  padding: 0 20px;


  @media (min-width: 550px) {
    display: inline;
  }
`;

interface ItemProps {
  borderColor: boolean;
}

export const Item = styled.button<ItemProps>`
  color: var(--white);
  font-size: 18px;
  padding: 20px;

  border-bottom: 2px solid;
  border-color: ${({ borderColor }) => borderColor ? '#db524f' : '#000000' };

  :hover {
    background-color: var(--darkGrey);
    cursor: pointer;
    border-color: ${({ borderColor }) => borderColor ? '#db524f' : '#303030' };
  }
`;

export const ItemText = styled.button`
  display: none;
  color: var(--white);
  font-size: 18px;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 920px) {
    display: inline;
    font-size: 20px;
  }
`;

const icon = css`
  width: 20px;
  height: 20px;

  color: #ffffff;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 920px) {
    width: 30px;
    height: 30px;
  }
`;

export const CalendarIcon = styled(AiOutlineCalendar)`
  ${icon}
  @media (min-width: 920px) {
    display: none;
  }
`;

export const ClientIcon = styled(FiUsers)`
  ${icon}
  @media (min-width: 920px) {
    display: none;
  }
`;

export const BudgetIcon = styled(BsCardChecklist)`
  ${icon}
  @media (min-width: 920px) {
    display: none;
  }
`;

export const PropertyIcon = styled(BsHouse)`
  ${icon}
  @media (min-width: 920px) {
    display: none;
  }
`;

export const ControlIcon = styled(AiOutlineControl)`
  ${icon}
  @media (min-width: 920px) {
    display: none;
  }
`;

export const UserIcon = styled(FaUserCircle)`
  ${icon}
`;


