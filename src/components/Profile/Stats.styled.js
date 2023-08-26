import styled from 'styled-components';

export const Stat = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.background};
  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
  }
  padding-inline-start: 0px;
  margin-block: 0em;
 
`;

export const StatElem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  
 
`;

export const StatLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.accent};

`;

export const StatQuntity = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.xs};
`;