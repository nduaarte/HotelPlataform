import styled, { css } from 'styled-components';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { GiVacuumCleaner } from 'react-icons/gi';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
`;

export const Card = styled.div`
  background-color: var(--darkGrey);
  padding: 20px;
  border-radius: 10px;
`;

export const CardTitle = styled.section`
  color: var(--white);
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const CardValue = styled.span`
  color: var(--grey);
  font-weight: bold;
  font-size: 22px;
`;

const icon = css`
  color: var(--grey);
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;


export const PeopleIcon = styled(FiUsers)`
  ${icon}
`;

export const CleanIcon = styled(GiVacuumCleaner)`
  ${icon}
`;

export const PayIcon = styled(HiOutlineCurrencyDollar)`
  ${icon}
`;

