import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 30px 130px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageProperty = styled.img`
  width: 100%;
  height: 200px;
  /* max-width: 500px; */
  border-radius: 10px;

  @media (min-width: 950px) {
    width: 500px;
    height: 350px;
  }
`;

export const SubTitle = styled.h4`
  margin-top: 7px;
  font-size: 18px;
  color: var(--white);

  @media (min-width: 950px) {
    font-size: 22px;
  }
`;

interface DescriptionProps {
  bold?: boolean;
}

export const Description = styled.section<DescriptionProps>`
  font-size: 16px;
  color: ${({ color }) => color ? color : '#4d4d4d'};
  font-weight: ${({ bold }) => bold ? 600 : 400};

  @media (min-width: 950px) {
    font-size: 18px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 950px) {
    margin: 0 0 0 50px;
  }
`;

export const PropertyName = styled.h2`
  font-size: 24px;
  color: var(--white);

  @media (min-width: 950px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 3px;

  border-bottom: 1px solid var(--grey);

  @media (min-width: 950px) {
    margin-top: 30px;
  }
`;

interface AvailabilityProps {
  status: boolean;
}

export const Availability = styled.span<AvailabilityProps>`
  color: ${({ status }) => status ? '#47962c' : '#962c3d'};
`;
