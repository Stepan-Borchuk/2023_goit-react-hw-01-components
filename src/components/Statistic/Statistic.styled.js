import styled from 'styled-components';



export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const StatistList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Percentage = styled.span`
  color: white;
  margin-top: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  align-items: center;
  background-color: ${props => getRandomHexColor()};
`;
