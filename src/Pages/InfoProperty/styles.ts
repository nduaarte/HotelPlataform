import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 100px;
`;

export const LeftSide = styled.div`

`;

export const ImageProperty = styled.img`
  width: 500px;
  height: 350px;
  border-radius: 10px;
`;

export const SubTitle = styled.h4`
  margin-top: 7px;
  font-size: 22px;
  color: var(--white);
`;

interface DescriptionProps {
  bold?: boolean;
}

export const Description = styled.section<DescriptionProps>`
  font-size: 18px;
  color: ${({ color }) => color ? color : '#4d4d4d'};
  font-weight: ${({ bold }) => bold ? 600 : 400};
`;

export const RightSide = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
`;

export const PropertyName = styled.h2`
  font-size: 28px;
  color: var(--white);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 3px;

  border-bottom: 1px solid var(--grey);
`;

export const Availability = styled.span`
  color: var(--price);
`;
