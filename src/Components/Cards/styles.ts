import styled, { css } from 'styled-components';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { GiVacuumCleaner } from 'react-icons/gi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;

  background-color: var(--darkGrey);
  padding: 12px;
  border-radius: 10px;
  margin-top: 15px;

  @media (min-width: 950px) {
    align-items: flex-start;
    justify-content: space-around;
    width: 180px;
    height: 100px;
    margin: 0 10px;
  }
`;

export const CardTitle = styled.section`
  font-size: 14px;
  color: var(--white);
  font-weight: bold;
  margin-bottom: 8px;

  @media (min-width: 950px) {
    font-size: 17px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-self: center;
  align-items: flex-end;

  @media (min-width: 950px) {
    align-self: flex-start;
  }
`;

export const CardValue = styled.span`
  color: var(--grey);
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 950px) {
    font-size: 21px;
  }
`;

const icon = css`
  color: var(--grey);
  width: 24px;
  height: 24px;
  margin: 5px 2px 0 0; 

  @media (min-width: 950px) {
    width: 28px;
    height: 28px;
    margin-right: 5px;
  }
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

