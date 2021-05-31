import styled from 'styled-components';
import { AiOutlineCaretDown } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;

  border-bottom: 1px solid var(--darkGrey);

  @media (min-width: 950px) {
    padding: 20px 100px;
    justify-content: space-evenly;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
`;

export const ItemName = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--white);

  @media (min-width: 950px) {
    font-size: 16px;
  }
`;

export const ItemSelect = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 12px;
  width: 110px;
  height: 40px;
  border-radius: 5px;

  background-color: var(--darkGrey);
  color: var(--white);
  font-size: 12px;

  @media (min-width: 950px) {
    font-size: 15px;
    width: 150px;
    height: 45px;
  }
`;

export const ItemText = styled.span`
  
`;

export const ArrowIcon = styled(AiOutlineCaretDown)`
  width: 13px;
  height: 13px;
`;

export const Wrapper = styled.div`
  align-items: flex-end;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1150px) {
    flex-direction: row;
    margin-top: 25px;
  }
`;

export const FindButton = styled.button`
  width: 80px;
  height: 35px;
  margin: 4px 25px;
  border-radius: 7px;
  background: rgb(198,101,49);
  background: linear-gradient(61deg, rgba(198,101,49,1) 0%, rgba(252,74,74,1) 100%);

  color: var(--white);
  font-size: 14px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 1150px) {
    font-size: 16px;
    width: 100px;
    height: 40px;
  }
`;

export const MoreFilters = styled.button`
  color: rgba(252,74,74,1);
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 1150px) {
    margin-top: 0;
    font-size: 14px;
  }
`;


