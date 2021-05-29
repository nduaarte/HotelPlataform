import styled, { css } from 'styled-components';
import { FaAirbnb } from 'react-icons/fa';
import { BsHouse } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  background-color: var(--darkerGrey);
  border-radius: 20px;
  padding: 25px;
  margin-top: 25px;

  @media (min-width: 800px) {
    width: 45%;
  }

  @media (min-width: 1150px) {
    width: 30%;
  }
`;

export const Banner = styled.img`
  border-radius: 20px 20px 2% 2%;
  width: 100%;
  height: 100px;
  object-fit: cover;

  -webkit-box-shadow: 9px 9px 24px -10px rgba(0,0,0,0.55); 
  box-shadow: 9px 9px 24px -10px rgba(0,0,0,0.55);

  @media (min-width: 1150px) {
    height: 180px;
  }
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 18px;
  margin-top: 5px;

  @media (min-width: 1150px) {
    font-size: 22px;
  }
`;

export const Description = styled.span`
  color: var(--grey);
  font-size: 15px;

  @media (min-width: 1150px) {
    font-size: 17px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 10px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  background-color: var(--grey);
  margin: 0 5px;
  padding: 3px;
  border-radius: 50%;
`;

const icon = css`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--primary);

  :hover {
    cursor: pointer;
  }
`;

export const AirBnBIcon = styled(FaAirbnb)`
  ${icon}
`;

export const SeazoneIcon = styled(BsHouse)`
  ${icon}
`;

export const MoreIcon = styled(FiMoreVertical)`
  ${icon}
  align-self: center;
`;

export const Wrapper = styled.div`
  margin-top: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid var(--darkGrey);
`;

interface ItemTextProps {
  bold?: boolean;
}

export const ItemText = styled.section<ItemTextProps>`
  font-size: 14px;
  color: ${({ color }) => color ? color : '#D9D9D9'};
  font-weight: ${props => props.bold ? 600 : 400};
  line-height: 30px;
`;

