import styled from 'styled-components';

export const Container = styled.div`
`;

export const Wrapper = styled.div`
  padding: 15px 30px;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 26px;
  margin: 0 0 10px 5px;

  @media (min-width: 1000px) {
    margin: 10px 0 10px 40px;
  }
`;

export const Description = styled.span`
  color: var(--grey);
  margin-left: 5px;

  @media (min-width: 1000px) {
    margin-left:40px;
  }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  @media( min-width: 800px) {
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

